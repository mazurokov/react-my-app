import useFetch from "@pages/testFetch/hooks/useFetch.js";
import { useEffect, useState } from "react";

function UsersWithHook() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const filteredUsers = (data) => {
    if (!data) return [];

    return data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  };

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users?search=${debouncedSearch}`,
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-white">UsersWithHook</h2>

      <div className="mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-300">
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
          Search: {search || "—"}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
          Debounced: {debouncedSearch || "—"}
        </span>
      </div>

      {loading && <p className="text-zinc-300">Loading...</p>}
      {error && <p className="text-red-400">Error: {error.message}</p>}

      {data && (
        <ul className="space-y-2">
          {filteredUsers(data).map((user) => (
            <li
              key={user.id}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UsersWithHook;