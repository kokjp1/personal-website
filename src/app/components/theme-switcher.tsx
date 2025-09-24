"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="outline" size="icon" aria-label="Toggle theme" />;
  }

  const current = theme === "system" ? resolvedTheme : theme;
  const next = current === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Theme: ${current}`}
      aria-pressed={current === "dark"}
      className="relative overflow-hidden"
    >
      {/* Sun (light) */}
      <Icon
        icon="lucide:sun"
        className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
        aria-hidden
      />
      {/* Moon (dark) */}
      <Icon
        icon="lucide:moon"
        className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
        aria-hidden
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}