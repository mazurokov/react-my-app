import { useState } from "react";
import useLogger from "./useLogger";

function Counter() {
  const [count, setCount] = useState(0);

  useLogger(count);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Збільшити</button>

      <button onClick={() => setCount(count - 1)}>Зменшити</button>

      <button onClick={() => setCount(0)}>Скинути</button>

      {count % 2 === 0 ? <p>Число парне</p> : <p>Число непарне</p>}
    </div>
  );
}

export default Counter;
