"use client";
import { useEffect, useState, useRef } from "react";
import {
  fetchSiteStats,
  type SiteStats,
} from "@/lib/stats-client";

const COLOR_SCHEME = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

function levelFor(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export default function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<SiteStats | null>(null);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let active = true;
    fetchSiteStats().then((data) => {
      if (!active) return;
      setStats(data);
      if (!data.calendar) setFailed(true);
    });
    return () => {
      active = false;
    };
  }, [isVisible]);

  if (!isVisible || !stats) {
    return (
      <div ref={ref} className="mb-4 h-[100px] flex items-center justify-center">
        <span className="text-xs text-on-surface-variant">
          Carregando dados do GitHub…
        </span>
      </div>
    );
  }

  if (failed || !stats.calendar) {
    return (
      <div className="mb-4 h-[100px] flex items-center justify-center text-center px-2">
        <span className="text-xs text-on-surface-variant">
          Não foi possível carregar o gráfico de contribuições agora.
        </span>
      </div>
    );
  }

  const { weeks } = stats.calendar;

  return (
    <div className="mb-4" role="img" aria-label={`Gráfico de contribuições no GitHub: ${stats.calendar.totalContributions} contribuições no último ano`}>
      <div className="overflow-x-auto no-scrollbar pb-1">
        <div className="flex gap-[3px] w-max">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]" aria-hidden="true">
              {week.contributionDays.map((day) => (
                <span
                  key={day.date}
                  title={`${day.contributionCount} contribuições em ${day.date}`}
                  className="size-2 rounded-[2px]"
                  style={{ backgroundColor: COLOR_SCHEME[levelFor(day.contributionCount)] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
