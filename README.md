# use-memo-object - react `useMemoObject` hook

memo the context value conveniently

## Usage

```jsx
import { useMemoObject } from '@-ft/use-memo-object';

function AppContextProvider({ children, something }) {
  const someValue = useSomeValue();

  const value = useMemoObject({ something, someValue });
  // instead of...
  const v = useMemo(() => ({ something, someValue }), [something, someValue]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
```
