import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const username = "joaofelipe-dev";
    
    const fetchEventsPage = async (page) => {
      const response = await fetch(
        `https://api.github.com/users/${username}/events?per_page=100&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch page ${page}`);
      }
      return response.json();
    };

    const pages = await Promise.all(
      Array.from({ length: 10 }, (_, i) => fetchEventsPage(i + 1))
    );
    const allEvents = pages.flat();

    const contributionEvents = allEvents.filter(
      (event) => event.type === "PushEvent" || event.type === "CreateEvent"
    );

    const contributionsByDate = {};
    const today = new Date();
    const ninetyDaysAgo = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);

    contributionEvents.forEach((event) => {
      const date = new Date(event.created_at);
      if (date >= ninetyDaysAgo) {
        const dateStr = date.toISOString().split("T")[0];
        
        let dayContribution = 1;
        if (event.type === "PushEvent" && event.payload?.commits) {
          dayContribution = event.payload.commits.length;
        }
        
        contributionsByDate[dateStr] = (contributionsByDate[dateStr] || 0) + dayContribution;
      }
    });

    const total = Object.values(contributionsByDate).reduce((a, b) => a + b, 0);

    const commits = contributionEvents
      .filter((e) => e.type === "PushEvent")
      .reduce((sum, e) => sum + (e.payload?.commits?.length || 1), 0);

    return NextResponse.json({
      total,
      commits,
      contributionsByDate,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}