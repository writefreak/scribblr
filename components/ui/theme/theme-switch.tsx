"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function ThemeSwitch({ className }: Props) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Helper function to toggle between light and dark
  const toggleTheme = () => {
    // We use resolvedTheme to account for "system" setting
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full p-1 bg-[#377389] hover:bg-[#377389]/40 dark:bg-[#377389]/10 backdrop-blur-xl dark:hover:bg-transparent dark:border border-gray-600",
        className,
      )}
    >
      <Sun
        color="white"
        className="h-[1.2rem]  w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Moon
        color="white"
        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
