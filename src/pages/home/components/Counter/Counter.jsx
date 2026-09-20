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
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-lg font-semibold text-slate-800">Count: {count}</p>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="rounded bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          +
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="rounded bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          -
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded bg-slate-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT_BY", amount: 5 })}
          className="rounded bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
        >
          Increment by 5
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT_BY", amount: 5 })}
          className="rounded bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
        >
          Decrement by 5
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "SET_STEP", step: 5 })}
          className="rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
        >
          Set step to 5
        </button>
      </div>
    </div>
  );
}

export default Counter;
