function Dashboard() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-base leading-7 text-zinc-300">
          You are logged in and can see protected content.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;