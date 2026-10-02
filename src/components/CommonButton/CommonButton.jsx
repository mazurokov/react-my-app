function CommonButton({
  children,
  variant = "primary",
  isLoading = false,
  disabled,
  type = "button",
  className,
  ...props
}) {
  const variants = {
    primary: "bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:brightness-110 focus:ring-violet-500",

    secondary: "bg-white/10 text-zinc-200 border border-white/10 hover:bg-white/15 focus:ring-violet-500",

    success: "bg-emerald-500 text-white hover:bg-emerald-400 focus:ring-emerald-500",

    danger:
      "border border-red-400/30 bg-red-500/10 text-red-200 hover:bg-red-500/20 focus:ring-red-500",

    warning:
      "bg-amber-500 text-white hover:bg-amber-400 focus:ring-amber-500",

    info: "bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-500",

    outline:
      "border border-white/10 bg-transparent text-zinc-200 hover:bg-white/5 focus:ring-violet-500",

    ghost: "bg-transparent text-zinc-200 hover:bg-white/5 focus:ring-violet-500",

    dark: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-700",

    light: "bg-white/10 text-zinc-100 hover:bg-white/15 focus:ring-zinc-400",

    link: "bg-transparent text-violet-300 hover:text-violet-200 hover:underline focus:ring-violet-500",
  };

  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      className={`
        rounded-xl px-4 py-2.5 text-sm font-semibold
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950
        disabled:cursor-not-allowed disabled:opacity-60
        ${variants[variant] || variants.primary}
        ${className || ""}
      `}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default CommonButton;
