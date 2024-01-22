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

## useAutoFocus usage
Requires `@mantine/hooks` package.
Useful when you want to auto focus an element when it enters the viewport.
For example, in a dropdown with a search field.

```tsx
import { useMemo } from "react";
import { useScreenSize } from "path/to/hook/useAutoFocus";


function App() {
  // object destruct the window size boolean states you are interested in
  const { ref, inViewport } = useAutoFocus();

  // pass ref to component/element that needs auto focus when visible
  return (<input ref={ref} />)
}
```
