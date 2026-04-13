"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-4 right-4
        p-3 rounded-xl
        glass text-primary
        hover:scale-110 hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] transition-all duration-200
        z-50 cursor-pointer
      "
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}