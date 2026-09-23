import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate("/users");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-3xl font-bold text-slate-800">About</h1>
        <p className="mb-6 text-slate-600">
          This is the about page. It demonstrates how route navigation and Tailwind styling
          work together in the app.
        </p>

        <button
          onClick={goToUsers}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Go to Users
        </button>
      </div>
    </div>
  );
}
