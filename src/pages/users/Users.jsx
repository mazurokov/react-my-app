import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Ivan" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 bg-white text-slate-900">
      <h1>Users</h1>
      <div className="flex gap-3">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            Go to {user.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Users;
