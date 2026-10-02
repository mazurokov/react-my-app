import { useState, useMemo } from "react";

function UserSearch() {
  const [search, setSearch] = useState("");

  const [users] = useState([
    { id: 1, name: "Анна" },
    { id: 2, name: "Олег" },
    { id: 3, name: "Олена" },
    { id: 4, name: "Іван" },
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-white">User Search</h3>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users"
        className="mb-4 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
      />
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <div key={user.id} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSearch;
