import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">Timer</p>
      <p className="mt-2 text-2xl font-bold text-white">{seconds}s</p>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={startTimer}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Start
        </button>
        <button
          type="button"
          onClick={stopTimer}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Timer;
