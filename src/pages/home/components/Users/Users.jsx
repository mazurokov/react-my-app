import { useState, useEffect } from "react";

function Users() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [users, setUsers] = useState([{ id: 1, name: "Jack", age: 22 }]);

  const newUser = (event) => {
    event.preventDefault();

    if (!name || !age) {
      return;
    }

    const id = crypto.randomUUID();

    const newUser = {
      name,
      age: Number(age),
      id,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("");
    setAge("");
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  useEffect(() => {
    console.log("Компонент відрендерився");
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h2 className="mb-4 text-xl font-semibold text-white">Компонент Users</h2>

      <ul className="mb-4 space-y-3">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/30 p-3">
            <p className="text-zinc-200">
              Ім'я: {user.name}, Вік: {user.age}
            </p>

            <button
              type="button"
              onClick={() => deleteUser(user.id)}
              className="rounded-xl bg-red-500/80 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-500"
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <form className="flex max-w-xs flex-col gap-3 self-start" onSubmit={newUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Ім'я"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          type="number"
          placeholder="Вік"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Додати
        </button>
      </form>
    </div>
  );
}

export default Users;
