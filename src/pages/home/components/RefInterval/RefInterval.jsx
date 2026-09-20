import { useEffect, useRef, useState } from "react";

function RefInterval() {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const startInterval = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Interval running...", intervalRef.current);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log("Interval stopped.", intervalRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800">Ref Interval</h3>
      <p className="text-sm text-slate-600">Count: {count}</p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={startInterval}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
        >
          Start Interval
        </button>

        <button
          type="button"
          onClick={stopInterval}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Stop Interval
        </button>
      </div>
    </div>
  );
}

export default RefInterval;
