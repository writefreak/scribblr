"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useColorScheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a helper to check if we are dark
  const isDark = mounted && resolvedTheme === "dark";

  return {
    isDark,
    theme: mounted ? resolvedTheme : "light", // Default to light during SSR
    setTheme,
    mounted,
  };
}
