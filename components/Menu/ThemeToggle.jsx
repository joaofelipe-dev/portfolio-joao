"use client"; // necessário para interatividade no client

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
        fixed top-6 right-3
        p-4 rounded-full
        bg-foreground text-secondary
        shadow-lg hover:scale-110 transition-transform
        z-50 cursor-pointer
      "
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
