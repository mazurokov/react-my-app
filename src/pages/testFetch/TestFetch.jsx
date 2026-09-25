import {Link, Outlet} from "react-router-dom";

function TestFetch() {
  return (
    <section className="mx-auto max-w-6xl bg-white px-4 py-8 text-slate-900">
      <h1 className="mb-6 text-3xl font-bold">Fetch</h1>

      <nav className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
        <Link
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
          to="users"
        >
          UsersFetch
        </Link>
      </nav>

      <Outlet />
    </section>
  );
}

export default TestFetch;