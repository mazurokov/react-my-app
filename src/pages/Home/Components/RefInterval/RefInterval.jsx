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
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-white">Ref Interval</h3>
      <p className="text-sm text-zinc-300">Count: {count}</p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={startInterval}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Start Interval
        </button>

        <button
          type="button"
          onClick={stopInterval}
          className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-200 transition hover:bg-red-500/20"
        >
          Stop Interval
        </button>
      </div>
    </div>
  );
}

export default RefInterval;
