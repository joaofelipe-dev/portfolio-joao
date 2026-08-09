"use client";
import { useEffect, useState, useRef } from "react";

export default function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState(null);
  const ref = useRef(null);

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
    if (isVisible && !Component) {
      import("@raulcanodev/react-github-dots").then((mod) => {
        setComponent(() => mod.default);
      });
    }
  }, [isVisible, Component]);

  if (!isVisible) {
    return (
      <div ref={ref} className="mb-4 h-[140px] flex items-center justify-center">
        <span className="text-xs text-on-surface-variant">Carregando dados do GitHub...</span>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="mb-4 h-[140px] flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <Component
        username="joaofelipe-dev"
        token={process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}
        theme="dark"
        cacheTime="1d"
      />
    </div>
  );
}