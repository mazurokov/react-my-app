import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-white">Header</h2>
        <nav className="flex items-center gap-2 text-sm font-medium text-zinc-300">
          <Link className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white" to="/">
            Home
          </Link>
          <Link className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white" to="/about">
            About
          </Link>
          <a className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white" href="https://example.com">
            Example
          </a>
        </nav>
      </div>
    </header>
  );
}
