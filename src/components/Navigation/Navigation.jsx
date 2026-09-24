import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Navigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-6 text-sm font-medium">
      <NavLink
        className={({ isActive }) =>
          [
            "rounded-xl px-4 py-2 transition",

            theme === "dark"
              ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",

            isActive ? "font-bold text-blue-500" : "",
          ].join(" ")
        }
        to="/"
        end
      >
        Головна
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [
            "rounded-xl px-4 py-2 transition",

            theme === "dark"
              ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",

            isActive ? "font-bold text-blue-500" : "",
          ].join(" ")
        }
        to="/about"
      >
        Про нас
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [
            "rounded-xl px-4 py-2 transition",

            theme === "dark"
              ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",

            isActive ? "font-bold text-blue-500" : "",
          ].join(" ")
        }
        to="/users"
      >
        Користувачі
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [
            "rounded-xl px-4 py-2 transition",

            theme === "dark"
              ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",

            isActive ? "font-bold text-blue-500" : "",
          ].join(" ")
        }
        to="/form"
      >
        Form
      </NavLink>
    </nav>
  );
}

export default Navigation;
