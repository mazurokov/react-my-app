import {useState, useCallback, useMemo} from "react";
import ChildButton from "./ChildButton";
import VirtualList from "@pages/MemoTest/VirtualList.jsx";

function MemoTest() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  const settings = useMemo(() => {
    return {
      size: "large",
    };
  }, []);

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

      <ChildButton onClick={handleChildClick}
                   settings={settings}/>

      <VirtualList />
    </div>
  );
}

export default MemoTest;
