"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  /** You can still override these from where you use ThemeProvider */
  attribute?: "class" | "data-theme";
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  forcedTheme?: "light" | "dark";
};

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  ...props
}: Props) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
