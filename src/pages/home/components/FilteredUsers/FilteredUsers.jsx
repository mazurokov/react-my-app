import { useState } from "react";

function FilteredUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const filter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log("test filter", filter);
  return <></>;
}

export default FilteredUsers;
