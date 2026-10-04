import { NavLink } from "react-router-dom";
import { ThemeContext } from "@context/ThemeContext";
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
      to: "/fetch",
      label: "Fetch",
    },
    {
      to: "/query-provider",
      label: "Query Provider",
    },
    {
      to: "/zustand",
      label: "Zustand",
    },
    {
      to: "/redux",
      label: "Redux",
    },
  ];

  return (
    <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 pb-6 pt-4 text-sm font-medium">
      {navLinks.map((link) => (
        <NavLink
          className={({ isActive }) =>
            [
              "rounded-xl border px-4 py-2.5 transition-all duration-200",
              theme === "dark"
                ? "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                : "border-zinc-200 bg-white/80 text-zinc-700 hover:border-zinc-300 hover:bg-white hover:text-zinc-900",
              isActive
                ? "border-violet-400/60 bg-violet-500/10 text-violet-200 shadow-lg shadow-violet-500/10"
                : "",
            ].join(" ")
          }
          key={link.to}
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
