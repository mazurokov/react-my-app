import { useState } from "react";

function FilteredUsers() {
  const [users] = useState([]);
  const [search] = useState("");
  const filter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log("test filter", filter);
  return <></>;
}

export default FilteredUsers;
