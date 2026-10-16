import { useRef } from "react";

function TestUseRef() {
  const inputRef = useRef(null);

  const countRef = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <input
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
        ref={inputRef}
        type="text"
        placeholder="Focusable input"
      />

      <button
        className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        onClick={focusInput}
      >
        Focus input
      </button>

      <button
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
        onClick={() => {
          inputRef.current.value = "";
        }}
      >
        Clear input
      </button>

      <button
        className="rounded-xl bg-indigo-500/80 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
        onClick={() => {
          countRef.current += 1;
          console.log(countRef.current);
        }}
      >
        Ref +1
      </button>
    </div>
  );
}

export default TestUseRef;
