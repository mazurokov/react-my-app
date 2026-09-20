import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-emerald-700 px-4 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Footer</h2>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link className="transition hover:text-emerald-100" to="/">
            Home
          </Link>
          <Link className="transition hover:text-emerald-100" to="/about">
            About
          </Link>
          <a className="transition hover:text-emerald-100" href="https://example.com">
            Example
          </a>
        </nav>
      </div>
    </footer>
  );
}
