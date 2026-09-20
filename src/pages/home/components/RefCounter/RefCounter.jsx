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
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </div>
  );
}

export default RefCounter;
