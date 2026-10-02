function Notice({ type = "info", children }) {
  const classes = {
    error: "border-red-400/30 bg-red-500/10 text-red-200",
    success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    info: "border-violet-400/30 bg-violet-500/10 text-violet-200",
  };

  return (
    <p className={`rounded-xl border px-3 py-2 text-sm ${classes[type]}`}>
      {children}
    </p>
  );
}
export default Notice;
