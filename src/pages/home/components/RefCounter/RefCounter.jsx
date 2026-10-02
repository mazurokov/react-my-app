import { useEffect, useRef, useState } from "react";

function RefCounter() {
  const [count, setCount] = useState(0);

  const previousCountRef = useRef(null);

  useEffect(() => {
    console.log("Попереднє значення::", previousCountRef.current);
    console.log("Нове значення::", count);
    previousCountRef.current = count;
  }, [count]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">Ref Counter</p>
      <p className="mt-2 text-2xl font-bold text-white">Count: {count}</p>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => setCount((prev) => prev - 1)}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default RefCounter;
