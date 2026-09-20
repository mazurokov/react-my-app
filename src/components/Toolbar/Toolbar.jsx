import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={[
        "rounded-xl border p-5 shadow-sm",
        theme === "dark"
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <p className="mb-3 text-lg font-medium">Поточна тема: {theme}</p>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
      >
        Змінити тему
      </button>
    </div>
  );
}

export default Toolbar;
