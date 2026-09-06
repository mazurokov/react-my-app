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
    <form onSubmit={handleSubmit}>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email" // Має збігатися з ключем у стейті
          value={formData.email} // Значення береться зі стану
          onChange={handleChange} // Оновлюємо стан при кожному натисканні клавіші
        />
      </div>

      <div>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Увійти</button>
    </form>
  );
}
export default LoginForm;
