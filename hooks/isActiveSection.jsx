"use client";
import { useEffect, useState, useRef } from "react";

export function useActiveSection(ids, options) {
  const [active, setActive] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = options?.root ?? null;
    const rootMargin = options?.rootMargin ?? "0px";
    const threshold = options?.threshold ?? [0.4, 0.6];

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best && best.isIntersecting) {
          const id = best.target.id;
          setActive(id);
        }
      },
      { root, rootMargin, threshold }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    const missing = ids.some((id) => !document.getElementById(id));
    let mo = null;
    if (missing) {
      mo = new MutationObserver(() => {
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el && observerRef.current) observerRef.current.observe(el);
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observerRef.current?.disconnect();
      if (mo) mo.disconnect();
    };
  }, [JSON.stringify(ids), options?.rootMargin, JSON.stringify(options?.threshold || [])]);

  return active;
}
