import {Link, Outlet} from "react-router-dom";

function ZustandPage() {
  return (
    <section className="mx-auto max-w-6xl bg-white px-4 py-8 text-slate-900">
      <h2 className="text-xl font-bold mb-3">Zustand</h2>
      <Link
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
        to="counter"
      >
        Counter
      </Link>

      <Outlet />
    </section>
  )
}

export default ZustandPage;