import useAuth from "@store/useAuth/useAuth.js";

function AuthTest() {
  const user = useAuth((state) => state.user);
  const isAuthenticated = useAuth((state) => state.user !== null);
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/80">
            auth demo
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Authentication
          </h1>
        </div>

        <span
          className={`inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-xs font-medium ${
            isAuthenticated
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
              : "border-orange-400/30 bg-orange-500/10 text-orange-200"
          }`}
        >
          {isAuthenticated ? "Authenticated" : "Guest"}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-300">
        This is a glassmorphism demo for the authentication flow using Zustand.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          className="rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-500/90 to-blue-500/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isAuthenticated}
          onClick={() =>
            login({
              id: 1,
              name: "Anna",
            })
          }
          type="button"
        >
          Login as Anna
        </button>

        <button
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isAuthenticated}
          onClick={logout}
          type="button"
        >
          Logout
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        {isAuthenticated ? (
          <p className="text-base text-zinc-100">
            Logged in as <span className="font-semibold text-violet-200">{user.name}</span>
          </p>
        ) : (
          <p className="text-base text-zinc-300">Not authenticated yet.</p>
        )}
      </div>
    </div>
  );
}

export default AuthTest;
