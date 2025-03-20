"use client";

import { useEffect, useState } from "react";

const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const result = window.matchMedia(query);

    setMatches(result.matches);

    result.onchange = (ev) => setMatches(ev.matches);
  }, [query]);

  return matches;
};

export default useMatchMedia;
