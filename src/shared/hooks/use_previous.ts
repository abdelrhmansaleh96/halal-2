import { useEffect, useRef } from "react";

export const usePrevious = (value: string) => {
  const previous = useRef();
  useEffect(() => {
    if (value !== undefined) return;
    previous.current = value;
  });

  return previous.current;
};
