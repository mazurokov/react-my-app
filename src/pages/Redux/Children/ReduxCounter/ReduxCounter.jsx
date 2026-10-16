import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  setCount,
  incrementBy,
  decrement,
  decrementBy,
  reset,
} from "@store/redux/counterSlice.js";

function ReduxCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-5 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between gap-3 pb-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-200/80">
            redux demo
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">Counter</h3>
        </div>

        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-2xl font-black text-violet-100 shadow-inner shadow-violet-500/20">
          {count}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementBy(5))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          +5
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrementBy(5))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          -5
        </button>
        <button
          type="button"
          onClick={() => dispatch(setCount(100))}
          className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/15"
        >
          Set 100
        </button>
        <button
          type="button"
          onClick={() => dispatch(reset())}
          className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-100 transition hover:bg-rose-500/15"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ReduxCounter;
