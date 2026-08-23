import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface StatsDay {
  date: string;
  contributionCount: number;
}

interface StatsWeek {
  contributionDays: StatsDay[];
}

interface StatsData {
  commits: number;
  repos: number;
  contributions: number;
  lastUpdated: string;
  calendar: {
    totalContributions: number;
    weeks: StatsWeek[];
  };
}

let cachedData: StatsData | null = null;
let cacheDate: string | null = null;

function getDateStr(date = new Date()) {
  return date.toISOString().split("T")[0];
}

function resolveToken() {
  const serverToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  if (serverToken) return { token: serverToken, legacy: false };

  const legacyToken = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
  if (legacyToken) {
    console.warn(
      "Usando NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN como fallback. " +
        "Variáveis NEXT_PUBLIC_ ficam expostas no bundle do navegador — " +
        "renomeie para GITHUB_PERSONAL_ACCESS_TOKEN e revogue o token antigo."
    );
    return { token: legacyToken, legacy: true };
  }

  return { token: null, legacy: false };
}

export async function GET() {
  try {
    const today = getDateStr();

    if (cachedData && cacheDate === today) {
      return NextResponse.json({
        ...cachedData,
        cached: true,
      });
    }

    const { token } = resolveToken();
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

    const result: StatsData = {
      commits: commitsThisYear,
      repos,
      contributions: commitsThisYear,
      lastUpdated: new Date().toISOString(),
      calendar: {
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks,
      },
    };

    cachedData = result;
    cacheDate = today;

    return NextResponse.json(result);
  } catch (error) {
    console.error(
      "Stats API error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
