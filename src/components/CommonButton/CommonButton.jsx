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
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",

    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

    danger:
      "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 focus:ring-red-500",

    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",

    info: "bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500",

    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",

    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",

    dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700",

    light: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",

    link: "bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-blue-500",
  };

  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      className={`
        rounded-md px-4 py-2 text-sm font-medium
        transition
        focus:outline-none focus:ring-2 focus:ring-offset-2
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
