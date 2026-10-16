const users = ["Анна", "Олег", "Марія"];

function MapList() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-white">Map List</h3>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MapList;
