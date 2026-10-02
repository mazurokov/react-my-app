import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={[
        "rounded-3xl border p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl",
        theme === "dark"
          ? "border-white/10 bg-white/5 text-white"
          : "border-zinc-200 bg-white/80 text-zinc-900",
      ].join(" ")}
    >
      <p className="mb-3 text-lg font-medium">Поточна тема: {theme}</p>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
      >
        Змінити тему
      </button>
    </div>
  );
}

export default Toolbar;
