import { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.step,
      };

    case "RESET":
      return {
        ...state,
        count: 0,
      };

    case "INCREMENT_BY":
      return {
        ...state,
        count: state.count + action.amount,
      };

    case "DECREMENT_BY":
      return {
        ...state,
        count: state.count - action.amount,
      };

    case "SET_STEP":
      return {
        ...state,
        step: action.step,
      };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <div className="flex flex-col items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-lg font-semibold text-white">Count: {count}</p>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          +
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
        >
          -
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT_BY", amount: 5 })}
          className="rounded-xl bg-emerald-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          Increment by 5
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT_BY", amount: 5 })}
          className="rounded-xl bg-amber-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-500"
        >
          Decrement by 5
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "SET_STEP", step: 5 })}
          className="rounded-xl bg-violet-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Set step to 5
        </button>
      </div>
    </div>
  );
}

export default Counter;
