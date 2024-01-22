import { useInViewport } from "@mantine/hooks";
import { useEffect } from "react";

export default function useAutoFocus() {
  const { ref, inViewport } = useInViewport();

  useEffect(() => {
    if (inViewport) {
      ref.current?.focus();
    }
  }, [ref, inViewport]);

  return { ref, inViewport } as const;
}
