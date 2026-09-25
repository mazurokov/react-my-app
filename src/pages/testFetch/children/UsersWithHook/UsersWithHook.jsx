import useFetch from "../../hooks/useFetch.js";
import {useEffect, useState} from "react";

function UsersWithHook() {

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");


  const filteredUsers = (data) => {
    if (!data) return [];

    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const {
    data,
    loading,
    error,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/users?search=${debouncedSearch}`
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
    <section>
      <h2 className="text-xl font-bold mb-3">UsersWithHook</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {filteredUsers(data).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users"
          className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
        />
      </div>

      <p>Search: {search}</p>
      <p>Debounced: {debouncedSearch}</p>
    </section>
  )
}

export default UsersWithHook;