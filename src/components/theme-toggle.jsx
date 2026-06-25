"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const ThemeToggle = ({ className }) => {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(next);
    setIsDark(next === "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle theme"
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-200 backdrop-blur transition-all duration-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md hover:shadow-primary-500/20",
        className
      )}
    >
      {/* Avoid icon mismatch flash until mounted */}
      <Sun
        className={cn(
          "h-[18px] w-[18px] transition-all duration-300",
          mounted && !isDark
            ? "rotate-0 scale-100 opacity-100"
            : "absolute rotate-90 scale-0 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "h-[18px] w-[18px] transition-all duration-300",
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "absolute -rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  );
};

export default ThemeToggle;
