import { useEffect, useState } from "react";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка сервера");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Помилка при отриманні користувачів");
        setLoading(false);
      });
  }, []);

  let content;

  if (loading) {
    content = <p className="text-zinc-400">Loading...</p>;
  } else if (error) {
    content = <p className="text-red-400">{error}</p>;
  } else {
    content = (
      <ul className="space-y-2 text-zinc-300">
        {users.map((user) => (
          <li key={user.id} className="rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2 text-white">
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-white">Get Users Component</h3>
      <div className="space-y-2">{content}</div>
    </div>
  );
}

export default GetUsers;
