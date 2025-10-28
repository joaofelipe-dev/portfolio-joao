"use client"; // necessário para interatividade no client

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Inicializa com a classe dark no HTML
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
        fixed top-6 right-6
        p-4 rounded-full
        bg-primary text-primary-foreground
        shadow-lg hover:scale-110 transition-transform
        z-50
      "
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
