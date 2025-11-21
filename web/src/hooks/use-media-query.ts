"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // async update to avoid React warning
    const updateMatch = () => {
      requestAnimationFrame(() => {
        setMatches(media.matches);
      });
    };

    updateMatch(); // initial check

    media.addEventListener("change", updateMatch);

    return () => {
      media.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
}
