"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 80;

/**
 * Tracks whether the page has scrolled past the header's compact
 * threshold (Design System §9: "Header стає compact... після 80px
 * скролу"). Passive listener + rAF-throttled state update keeps this
 * off the main-thread hot path during scroll.
 */
export function useScrollState(threshold = SCROLL_THRESHOLD): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
