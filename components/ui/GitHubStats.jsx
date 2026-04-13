"use client";
import { useState, useEffect } from "react";
import { FolderGit2 } from "lucide-react";

function getActivityColor(count) {
  if (!count || count === 0) return "bg-surface-container-low";
  if (count === 1) return "bg-primary/30";
  if (count <= 3) return "bg-primary/50";
  if (count <= 5) return "bg-primary/70";
  return "bg-primary";
}

export default function GitHubStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        if (json.total) {
          setData(json);
        }
      } catch (e) {
        console.error("GitHub API error:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Gerar últimas 13 semanas de dados
  const weeks = [];
  const today = new Date();
  for (let w = 12; w >= 0; w--) {
    const week = [];
    for (let d = 6; d >= 0; d--) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + d));
      const dateStr = date.toISOString().split("T")[0];
      const count = data?.contributionsByDate?.[dateStr] || 0;
      week.push({ date: dateStr, count });
    }
    weeks.push(week);
  }

  if (loading) {
    return (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <FolderGit2 className="size-4 text-primary animate-pulse" />
          <span className="text-xs font-medium text-on-surface">GitHub</span>
        </div>
        <div className="flex gap-[2px]">
          {Array.from({ length: 91 }).map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-[2px] bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const total = data?.total || 38;

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <FolderGit2 className="size-4 text-primary" />
        <span className="text-xs font-medium text-on-surface">GitHub</span>
      </div>

      <div className="flex gap-[2px] mb-2">
        <span className="text-[9px] text-on-surface-variant mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-2.5 h-2.5 rounded-[2px] ${
              level === 0
                ? "bg-surface-container-low"
                : level === 1
                ? "bg-primary/30"
                : level === 2
                ? "bg-primary/50"
                : level === 3
                ? "bg-primary/70"
                : "bg-primary"
            }`}
          />
        ))}
        <span className="text-[9px] text-on-surface-variant ml-1">More</span>
      </div>

      <div className="flex gap-[2px]">
        {weeks.map((week, w) => (
          <div key={w} className="flex flex-col gap-[2px]">
            {week.map((day, d) => (
              <div
                key={d}
                className={`w-2.5 h-2.5 rounded-[2px] ${getActivityColor(day.count)}`}
                title={day.count ? `${day.count} contributions on ${day.date}` : "No activity"}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2 text-[10px] text-on-surface-variant">
        <span>{total} contributions</span>
        <a
          href="https://github.com/joaofelipe-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          @joaofelipe-dev
        </a>
      </div>
    </div>
  );
}