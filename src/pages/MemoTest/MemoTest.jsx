import { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

function MemoTest() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Theme: {theme}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>

      <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        Toggle theme
      </button>

      <ChildButton onClick={handleChildClick} />
    </div>
  );
}

export default MemoTest;
