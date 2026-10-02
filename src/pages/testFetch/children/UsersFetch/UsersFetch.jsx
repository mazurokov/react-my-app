import { useState, useEffect } from "react";

function TestFetch() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async ({ signal }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-white">UsersFetch</h2>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="border-b border-white/10 py-3 last:border-none">
            <p className="font-semibold text-white">{user.name}</p>
            <p className="text-sm text-zinc-400">{user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestFetch;
