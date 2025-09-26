"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

export function Toaster(props: Omit<ToasterProps, "theme" | "toastOptions">) {
  const { resolvedTheme } = useTheme(); // 'light' | 'dark'
  const theme = resolvedTheme === "dark" ? "dark" : "light";

return (
    <Sonner
      theme={theme}
      position="top-right"
      closeButton
      toastOptions={{
        duration: 2800,
        classNames: {
          toast: "minimal-toast", // border thickness handled in CSS
          title: "minimal-toast-title",
          description: "minimal-toast-desc",
          success: "minimal-toast-success",
          error: "minimal-toast-error",
          warning: "minimal-toast-warning",
          info: "minimal-toast-info",
          closeButton: "minimal-toast-close",
        },
      }}
      {...props}
    />
  );
}