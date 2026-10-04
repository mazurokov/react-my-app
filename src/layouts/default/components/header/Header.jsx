import { Link } from "react-router-dom";

const navItems = [
  {
 label: "Головна", to: "/" 
},
  {
 label: "Про нас", to: "/about" 
},
  {
 label: "Користувачі", to: "/users" 
},
  {
 label: "Форма", to: "/form" 
},
  {
 label: "Вхід", to: "/login" 
},
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 font-bold shadow-lg shadow-violet-500/25">
            R
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">React</p>
            <p className="text-lg font-semibold tracking-tight">My App</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/login"
          className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
        >
          Увійти
        </Link>
      </div>
    </header>
  );
}
