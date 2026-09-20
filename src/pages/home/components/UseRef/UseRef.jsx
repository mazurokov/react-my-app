import { useRef } from "react";

function TestUseRef() {
  const inputRef = useRef(null);

  const countRef = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
        ref={inputRef}
        type="text"
      />

      <button
        className="rounded bg-emerald-500 px-3 py-2 text-white transition hover:bg-emerald-600"
        onClick={focusInput}
      >
        Focus input
      </button>

      <button
        className="rounded bg-slate-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
        onClick={() => {
          inputRef.current.value = "";
        }}
      >
        Clear input
      </button>

      <button
        className={
          "rounded bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
        }
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
