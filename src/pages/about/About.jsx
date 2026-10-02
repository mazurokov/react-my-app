import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate("/users");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">About</h1>
        <p className="mb-6 text-base leading-7 text-zinc-300">
          This is the about page. It demonstrates how route navigation and Tailwind styling
          work together in the app.
        </p>

        <button
          onClick={goToUsers}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Go to Users
        </button>
      </div>
    </div>
  );
}
