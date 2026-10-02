import useCounterStore from "@store/counterStore.js";
import CommonButton from "@components/CommonButton/CommonButton.jsx";

function Counter() {

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementBy = useCounterStore((state) => state.incrementBy);
  const decrement = useCounterStore((state) => state.decrement);
  const decrementBy = useCounterStore((state) => state.decrementBy);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <div>
        <p className="mb-2 text-base leading-7 text-zinc-300">{count}</p>
        <div className="flex flex-wrap gap-2">
          <CommonButton
            onClick={increment}
            type="button"
            variant="secondary"
          >
            +1
          </CommonButton>
          <CommonButton
            onClick={() => incrementBy(5)}
            type="button"
            variant="secondary"
          >
            +5
          </CommonButton>
          <CommonButton
            onClick={decrement}
            type="button"
            variant="secondary"
          >
            -1
          </CommonButton>
          <CommonButton
            onClick={() => decrementBy(5)}
            type="button"
            variant="secondary"
          >
            -5
          </CommonButton>
          <CommonButton
            onClick={reset}
            type="button"
            variant="secondary"
          >
            Reset
          </CommonButton>
        </div>
      </div>
    </div>
  );
}

export default Counter;