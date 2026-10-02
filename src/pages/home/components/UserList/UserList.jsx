import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Не вдалося отримати дані");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Вимикаємо лоадер у будь-якому випадку
      }
    };

    fetchUsers();
  }, []); // Порожній масив означає запит один раз при монтуванні

  if (loading)
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <p className="text-zinc-300">Завантаження...</p>
      </div>
    );

  if (error)
    return (
      <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-5 text-red-200 shadow-2xl shadow-red-500/10 backdrop-blur-xl">
        <p>Помилка: {error}</p>
      </div>
    );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-white">Users List</h3>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
