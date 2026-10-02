import { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Олена", age: 25 });

  const updateAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">Profile</p>
      <p className="mt-2 text-lg font-semibold text-white">Ім'я: {user.name}</p>
      <p className="mb-4 text-zinc-300">Вік: {user.age}</p>
      <button
        type="button"
        onClick={updateAge}
        className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
      >
        Збільшити вік
      </button>
    </div>
  );
}

export default User;
