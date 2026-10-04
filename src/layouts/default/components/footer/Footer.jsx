import { Link } from "react-router-dom";

const footerLinks = [
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
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/90 px-4 py-8 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 font-bold shadow-lg shadow-violet-500/25">
              R
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">React</p>
              <p className="text-lg font-semibold tracking-tight">My App</p>
            </div>
          </Link>

          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Створюємо прості та ефективні інтерфейси для навчання, демонстрації та розробки на React.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Навігація</h3>
          <nav className="flex flex-col gap-3 text-sm text-zinc-400">
            {footerLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Контакти</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>hello@reactmyapp.dev</li>
            <li>+38 (067) 123-45-67</li>
            <li>Київ, Україна</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-center text-sm text-zinc-500">
        © 2026 React My App. Всі права захищені.
      </div>
    </footer>
  );
}
