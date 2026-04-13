import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

let cachedData = null;
let cacheDate = null;

function getDateStr(date = new Date()) {
  return date.toISOString().split("T")[0];
}

export async function GET() {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
    const today = getDateStr();

    if (cachedData && cacheDate === today) {
      return NextResponse.json({
        ...cachedData,
        cached: true,
      });
    }

    if (!token) {
      throw new Error("GitHub token not configured");
    }

    const username = "joaofelipe-dev";

    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
          repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
            totalCount
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const user = data.data.user;
    const calendar = user.contributionsCollection.contributionCalendar;
    const repos = user.repositories.totalCount;

    const yearStart = new Date(new Date().getFullYear(), 0, 1);
    let commitsThisYear = 0;

    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        const dayDate = new Date(day.date);
        if (dayDate >= yearStart) {
          commitsThisYear += day.contributionCount;
        }
      }
    }

    const result = {
      commits: commitsThisYear,
      repos,
      contributions: commitsThisYear,
      lastUpdated: new Date().toISOString(),
    };

    cachedData = result;
    cacheDate = today;

    return NextResponse.json(result);
  } catch (error) {
    console.error("Stats API error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch stats", detail: error.message },
      { status: 500 }
    );
  }
}