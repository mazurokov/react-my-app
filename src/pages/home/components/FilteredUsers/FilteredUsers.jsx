import { useState } from "react";

function FilteredUsers() {
  const [users] = useState([]);
  const [search] = useState("");
  const filter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log("test filter", filter);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-white">Filtered Users</h3>
      <p className="text-sm text-zinc-300">No data yet.</p>
    </div>
  );
}

export default FilteredUsers;
