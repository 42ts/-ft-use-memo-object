import { useMemo } from 'react';

export function useMemoObject<T extends object>(obj: T): T {
  return useMemo(
    () => obj,
    [
      obj,
      ...Object.keys(obj)
        .sort()
        .map((key) => obj[key as keyof T]),
    ]
  );
}
