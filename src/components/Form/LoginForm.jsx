import { useState } from "react";

function LoginForm() {
  // Зберігаємо дані форми в одному об'єкті стану
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Універсальний обробник для будь-якого інпуту завдяки атрибуту name
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value, // Динамічний ключ об'єкта (email або password)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо стандартному перезавантаженню сторінки браузером
    console.log("Відправка даних:", formData);
    alert(`Користувач: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-zinc-950/30 p-5 shadow-2xl shadow-violet-500/10">
      <pre className="mb-4 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-zinc-300">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Увійти
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
