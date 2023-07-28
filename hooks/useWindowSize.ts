import { useCallback, useEffect, useMemo, useState } from "react";

export type useWindowSizeResult = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
  isXXLarge: boolean;
};

/**
 * Custom hook to detect the user's current window size.
 * @returns Returns an object containing booleans for each window size.
 */
export const useWindowSize = (): useWindowSizeResult => {
  const smallQuery = useMemo(() => window.matchMedia("(min-width: 640px)"), []);
  const mediumQuery = useMemo(
    () => window.matchMedia("(min-width: 768px)"),
    [],
  );
  const largeQuery = useMemo(() => window.matchMedia("(min-width: 896px)"), []);
  const XLargeQuery = useMemo(
    () => window.matchMedia("(min-width: 1024px)"),
    [],
  );
  const XXLargeQuery = useMemo(
    () => window.matchMedia("(min-width: 1280px)"),
    [],
  );

  const [isSmall, setIsSmall] = useState(smallQuery.matches);
  const [isMedium, setIsMedium] = useState(mediumQuery.matches);
  const [isLarge, setIsLarge] = useState(largeQuery.matches);
  const [isXLarge, setIsXLarge] = useState(XLargeQuery.matches);
  const [isXXLarge, setIsXXLarge] = useState(XXLargeQuery.matches);

  const handleSmallChange = useCallback((e: MediaQueryListEvent) => {
    setIsSmall(e.matches);
  }, []);
  const handleMediumChange = useCallback((e: MediaQueryListEvent) => {
    setIsMedium(e.matches);
  }, []);
  const handleLargeChange = useCallback((e: MediaQueryListEvent) => {
    setIsLarge(e.matches);
  }, []);
  const handleXLargeChange = useCallback((e: MediaQueryListEvent) => {
    setIsXLarge(e.matches);
  }, []);
  const handleXXLargeChange = useCallback((e: MediaQueryListEvent) => {
    setIsXXLarge(e.matches);
  }, []);

  useEffect(() => {
    smallQuery.addEventListener("change", handleSmallChange);
    mediumQuery.addEventListener("change", handleMediumChange);
    largeQuery.addEventListener("change", handleLargeChange);
    XLargeQuery.addEventListener("change", handleXLargeChange);
    XXLargeQuery.addEventListener("change", handleXXLargeChange);

    return () => {
      smallQuery.removeEventListener("change", handleSmallChange);
      mediumQuery.removeEventListener("change", handleMediumChange);
      largeQuery.removeEventListener("change", handleLargeChange);
      XLargeQuery.removeEventListener("change", handleXLargeChange);
      XXLargeQuery.addEventListener("change", handleXXLargeChange);
    };
  }, [
    smallQuery,
    mediumQuery,
    largeQuery,
    XLargeQuery,
    XXLargeQuery,
    handleSmallChange,
    handleMediumChange,
    handleLargeChange,
    handleXLargeChange,
    handleXXLargeChange,
  ]);

  return { isSmall, isMedium, isLarge, isXLarge, isXXLarge } as const;
};
