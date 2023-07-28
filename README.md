# react-util-hooks
A collection of hooks I've created across various projects.


## useWindowSize usage
```tsx
import { useMemo } from "react";
import { useScreenSize } from "path/to/hook/useScreenSize";


function App() {
  // object destruct the window size boolean states you are interested in
  const { isSmall, isLarge } = useWindowSize();

  // utilize the booleans as needed
  const iconSize = useMemo(() => {
    if (isLarge) return 30;
    if (isSmall) return 24;
    else return 22;
  }, [isSmall, isLarge]);
}
```
