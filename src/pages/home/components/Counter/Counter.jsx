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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>

      <button onClick={() => dispatch({ type: "INCREMENT_BY", amount: 5 })}>
        Increment by 5
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT_BY",
            amount: 5,
          })
        }
      >
        Decrement by 5
      </button>

      <button onClick={() => dispatch({ type: "SET_STEP", step: 5 })}>
        Set step to 5
      </button>
    </div>
  );
}

export default Counter;
