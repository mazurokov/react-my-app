import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Ivan" },
  ];

  return (
    <div>
      <h1>Users</h1>
      <div className="flex gap-3">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            Go to {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;
