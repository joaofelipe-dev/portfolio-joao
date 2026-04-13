import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const username = "joaofelipe-dev";
    
    const response = await fetch(
      `https://api.github.com/users/${username}/events?per_page=50`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub events");
    }

    const events = await response.json();

    // Filtrar apenas eventos de contribuição (PushEvent, CreateEvent)
    const contributionEvents = events.filter(
      (event) => event.type === "PushEvent" || event.type === "CreateEvent"
    );

    // Contar contribuições por dia (últimos 90 dias)
    const contributionsByDate = {};
    const today = new Date();
    const ninetyDaysAgo = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);

    contributionEvents.forEach((event) => {
      const date = new Date(event.created_at);
      if (date >= ninetyDaysAgo) {
        const dateStr = date.toISOString().split("T")[0];
        contributionsByDate[dateStr] = (contributionsByDate[dateStr] || 0) + 1;
      }
    });

    // Calcular total
    const total = Object.values(contributionsByDate).reduce((a, b) => a + b, 0);

    // Contar commits ( PushEvents = 1 commit por event)
    const commits = contributionEvents.filter(
      (e) => e.type === "PushEvent"
    ).length;

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