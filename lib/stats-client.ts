export interface StatsDay {
  date: string;
  contributionCount: number;
}

export interface StatsWeek {
  contributionDays: StatsDay[];
}

export interface StatsCalendar {
  totalContributions: number;
  weeks: StatsWeek[];
}

export interface SiteStats {
  commits: number | null;
  repos: number | null;
  contributions: number | null;
  calendar: StatsCalendar | null;
}

const EMPTY_STATS: SiteStats = {
  commits: null,
  repos: null,
  contributions: null,
  calendar: null,
};

let statsPromise: Promise<SiteStats> | null = null;

export function fetchSiteStats(): Promise<SiteStats> {
  if (!statsPromise) {
    statsPromise = fetch("/api/stats")
      .then((res) => (res.ok ? res.json() : EMPTY_STATS))
      .catch(() => EMPTY_STATS);
  }
  return statsPromise;
}
