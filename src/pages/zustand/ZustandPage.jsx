import {Link, Outlet} from "react-router-dom";

function ZustandPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Zustand</h2>
        <Link
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
          to="counter"
        >
          Counter
        </Link>

        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default ZustandPage;