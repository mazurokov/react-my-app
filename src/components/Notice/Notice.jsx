function Notice({ type = "info", children }) {
  const classes = {
    error: "border-red-200 bg-red-50 text-red-600",
    success: "border-green-200 bg-green-50 text-green-700",
    info: "border-blue-200 bg-blue-50 text-blue-700",
  };

  return (
    <p className={`rounded-md border px-3 py-2 text-sm ${classes[type]}`}>
      {children}
    </p>
  );
}
export default Notice;
