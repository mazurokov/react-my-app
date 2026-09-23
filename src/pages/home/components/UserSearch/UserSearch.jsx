import { useState, useMemo } from "react";

function UserSearch() {
  const [search, setSearch] = useState("");

  const [users] = useState([
    { id: 1, name: "Анна" },
    { id: 2, name: "Олег" },
    { id: 3, name: "Олена" },
    { id: 4, name: "Іван" },
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserSearch;
