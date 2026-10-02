import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    onLogin();
    navigate(from, { replace: true });
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl"
      >
        <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-white">Login Page</h1>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-300">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}

export default Login;