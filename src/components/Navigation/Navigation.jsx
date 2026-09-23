import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Navigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-6 text-sm font-medium">
      <Link
        className={[
          "rounded-xl px-4 py-2 transition",
          theme === "dark"
            ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
            : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
        ].join(" ")}
        to="/"
      >
        Головна
      </Link>
      <Link
        className={[
          "rounded-xl px-4 py-2 transition",
          theme === "dark"
            ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
            : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
        ].join(" ")}
        to="/about"
      >
        Про нас
      </Link>
      <Link
        className={[
          "rounded-xl px-4 py-2 transition",
          theme === "dark"
            ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
            : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
        ].join(" ")}
        to="/users"
      >
        Користувачі
      </Link>
    </nav>
  );
}

export default Navigation;
