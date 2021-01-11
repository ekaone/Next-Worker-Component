import React from "react";

import { useWorker } from "react-hooks-worker";

const createWorker = () => new Worker("./slow_fib.worker", { type: "module" });

const CalcFib = ({ count }) => {
  const { result, error } = useWorker(createWorker, count);
  if (error) return <div>Error: {error}</div>;
  return <div>Result: {result}</div>;
};

const App = () => (
  <div>
    <CalcFib count={5} />
  </div>
);
