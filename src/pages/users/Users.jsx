import { Link } from "react-router-dom";

function Users() {
  const users = [
    {
 id: 1, name: "Anna" 
},
    {
 id: 2, name: "Oleg" 
},
    {
 id: 3, name: "Ivan" 
},
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-5 text-3xl font-bold tracking-tight">Users</h1>
        <div className="flex flex-wrap gap-3">
          {users.map((user) => (
            <Link
              key={user.id}
              to={`/users/${user.id}`}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
            >
              Go to {user.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Users;
