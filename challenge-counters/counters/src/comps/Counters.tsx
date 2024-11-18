import { useState, useEffect } from "react";
import { useCounter } from "./useCounter"; // Import the custom hook

const Counters: React.FC = () => {
  const data: string[] = [
    "counting1",
    "counting2",
    "counting3",
    "counting4",
    "counting5",
  ];

  const [total, setTotal] = useState<number>(0); // Track the total count in parent
  const [counts, setCounts] = useState<number[]>(new Array(data.length).fill(0)); // Initialize an array to track individual counts

  // Function to update the total count using useEffect
  useEffect(() => {
    // Calculate the total by summing up all individual counts
    const totalCount = counts.reduce((acc, curr) => acc + curr, 0);
    setTotal(totalCount); // Update the total state
  }, [counts]); // This effect will run every time the counts array changes

  const updateCount = (index: number, newCount: number) => {
    const updatedCounts = [...counts];
    updatedCounts[index] = newCount;
    setCounts(updatedCounts); // Update the count for the specific counter
  };

  const resetTotal = () => {
    setCounts(new Array(data.length).fill(0)); // Reset all counters
  };

  return (
    <div>
      {data.map((item, index) => {
        const { count, increment, reset } = useCounter();

        const handleIncrement = () => {
          increment();
          updateCount(index, count + 1); // Update the count for this specific counter
        };

        const handleReset = () => {
          const currentCount = 0;
          reset();
          updateCount(index, 0); // Reset the count for this counter
        };

        return (
          <div key={index}>
            <h1>{item}</h1>
            <button onClick={handleIncrement}>
              {item} count: {count}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        );
      })}
      <div>Total Count: {total}</div>
      <button onClick={resetTotal}>Reset Total Count</button>
    </div>
  );
};

export default Counters;
