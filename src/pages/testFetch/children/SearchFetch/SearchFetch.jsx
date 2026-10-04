import { useEffect, useState, useCallback } from "react";

function SearchFetch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = useCallback(async ({ signal, searchValue } = {}) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
 signal 
});

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()),
      );

      setUsers(filteredUsers);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    Promise.resolve().then(() =>
      fetchUsers({
 signal: controller.signal, searchValue: search 
}),
    );
    return () => controller.abort();
  }, [search, fetchUsers]);

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-white">SearchFetch</h2>

      <div className="space-y-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="text-zinc-500">Search:</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">
            {search || "—"}
          </span>
        </div>

        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
            >
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchFetch;
