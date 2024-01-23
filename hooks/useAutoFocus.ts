'use client';

import { useRef, useState, useMemo, useEffect } from 'react';

export function useAutoFocus() {
  const { ref, inViewport } = useInViewport();

  useEffect(() => {
    if (inViewport) {
      ref.current?.focus();
    }
  }, [ref, inViewport]);

  return { ref, inViewport } as const;
}

// from @mantine/hooks (MIT license)
// https://github.com/mantinedev/mantine/blob/06bd805748d68df5e4a62ea5c9d1b2ca1251296f/packages/%40mantine/hooks/src/use-in-viewport/use-in-viewport.ts
export function useInViewport<T extends HTMLElement = any>() {
  const ref = useRef<T>(null);
  const [inViewport, setInViewport] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return null;
    }
    return new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting));
  }, [ref]);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
    return () => null;
  }, []);

  return { ref, inViewport };
}
