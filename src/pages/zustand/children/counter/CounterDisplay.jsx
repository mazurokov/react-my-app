import useCounterStore from "@store/counterStore.js";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return <div>count:: {count}</div>;
}

export default CounterDisplay;
