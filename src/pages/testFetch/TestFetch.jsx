import { Link, Outlet } from "react-router-dom";

function TestFetch() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Fetch</h1>

        <nav className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 p-3">
          <Link
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
            to="users"
          >
            UsersFetch
          </Link>

          <Link
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
            to="search"
          >
            SearchFetch
          </Link>

          <Link
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
            to="users-with-hook"
          >
            UsersWithHook
          </Link>
        </nav>

        <Outlet />
      </div>
    </section>
  );
}

export default TestFetch;