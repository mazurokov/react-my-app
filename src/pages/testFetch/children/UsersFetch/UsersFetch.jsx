import {useState, useEffect} from "react";

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
  }

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <h2 className={"text-xl font-bold"}>UsersFetch</h2>
      <div>
        {users.map((user) => (
          <div key={user.id} className={"border-b border-slate-300 py-2"}>
            <p className={"font-bold"}>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestFetch;
