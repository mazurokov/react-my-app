import {useNavigate, useParams, useLocation, Outlet, Link} from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("pathname:", location.pathname);
  console.log("search:", location.search);
  console.log("state:", location.state);
  console.log(location.state);

  const { id } = useParams();

  console.log(id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">User Details</h1>
        <p className="mb-5 text-zinc-300">User ID: {id}</p>

        <div className="mb-5 flex flex-wrap gap-3">
          <Link
            to="profile"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="posts"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
          >
            Posts
          </Link>
        </div>

        <div className="mb-5">
          <Outlet />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
          >
            Go Home
          </button>
          <button
            type="button"
            onClick={() =>
              navigate("/users/2", {
                state: {
                  from: "users",
                },
              })
            }
            className="rounded-xl border border-violet-400/40 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-100 transition hover:bg-violet-500/20"
          >
            TEST Navigate to User 2 with state
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
