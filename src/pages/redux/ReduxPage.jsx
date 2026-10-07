import { Link, Outlet } from "react-router-dom";

function ReduxPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 text-white">
      <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/6 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_34%)]" />

        <div className="relative">
          <header className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.32em] text-violet-200/80">
                state demo
              </p>
              <h2 className="text-3xl font-black tracking-tight text-white">
                Redux
              </h2>
            </div>

            <span className="inline-flex w-fit items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-100 backdrop-blur-xl">
              Dark glass UI
            </span>
          </header>

          <nav className="mb-6 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3 shadow-inner shadow-slate-900/30">
            <Link
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              to="users"
            >
              Users
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              to="cart"
            >
              Cart
            </Link>
          </nav>

          <div className="mt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReduxPage;
