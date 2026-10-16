import { useState, useEffect } from "react";

function NameInput() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Ім'я змінилося:", name);
  }, [name]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="mb-3 text-sm text-zinc-300">Current name</p>
      <p className="mb-4 text-xl font-semibold text-white">{name || "—"}</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
        className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}

export default NameInput;
