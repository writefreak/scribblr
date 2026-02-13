"use client";

import { useEffect, useState } from "react";

export default function Transition() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Small delay to ensure the browser has painted the initial state
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    /* The container starts at translate-x-0 (full screen).
       It then moves to translate-x-full (slides out to the right).
    */
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none transition-transform duration-2000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        shouldAnimate ? "translate-x-full" : "translate-x-0"
      }`}
    >
      {/* The Logo: We add a slight counter-animation or fade 
         so it doesn't just "jump" away with the white background.
      */}
      <div
        className={`relative h-96 w-96 transition-all duration-700 delay-300`}
      >
        <img
          src="/scribblr-bg.png"
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
