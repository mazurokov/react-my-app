import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Navigation() {
  const { theme } = useContext(ThemeContext);

  const navLinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/dashboard",
      label: "Dashboard",
    },
    {
      to: "/login",
      label: "Login",
    },
    {
      to: "/form",
      label: "Form",
    },
    {
      to: "/users-fetch",
      label: "Users Fetch",
    },
  ];

  return (
    <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-6 text-sm font-medium">
      {navLinks.map((link) => (
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
          to={link.to}
          end
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
