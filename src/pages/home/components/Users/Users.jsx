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
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">Компонент Users</h2>

      <ul className="mb-4 space-y-3">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between gap-3 rounded-lg bg-white p-3 shadow-sm">
            <p className="text-slate-700">
              Ім'я: {user.name}, Вік: {user.age}
            </p>

            <button
              type="button"
              onClick={() => deleteUser(user.id)}
              className="rounded bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600"
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
          className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none ring-0 transition focus:border-emerald-500"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          type="number"
          placeholder="Вік"
          className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none ring-0 transition focus:border-emerald-500"
        />
        <button
          type="submit"
          className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Додати
        </button>
      </form>
    </div>
  );
}

export default Users;
