import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Код ефекту (аналог mounted + watch)
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 2. Функція очищення (аналог unmounted)
    return () => {
      clearInterval(interval);
    };
  }, []); // 👈 Масив залежностей (порожній масив означає "виконати лише 1 раз при монтуванні")

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">Timer</p>
      <p className="mt-2 text-2xl font-bold text-white">{seconds}s</p>
    </div>
  );
}

export default Timer;
