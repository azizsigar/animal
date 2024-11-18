// useCounter.ts
import { useState } from "react";

// Custom hook for counting logic
export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1); // Increment the count
  };

  const reset = (): void => {
    setCount(0); // Reset the count to 0
  };

  return {
    count,
    increment,
    reset,
  };
};
