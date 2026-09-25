import {useEffect, useState} from "react";

function SearchFetch() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const fetchUsers = async ({ signal, searchValue } = {}) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      const filteredUsers = data.filter((user) =>
        user.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

      setUsers(filteredUsers);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    fetchUsers({ signal: controller.signal, searchValue: search });
    return () => controller.abort();
  }, [search]);

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">SearchFetch</h2>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users"
          className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
        />
        {search}
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </section>
  );
}

export default SearchFetch;
