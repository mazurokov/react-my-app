import { useState } from "react";

const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");

function FilteredUsers() {
  const filter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log("test filter", filter);
  return <></>;
}

export default FilteredUsers;
