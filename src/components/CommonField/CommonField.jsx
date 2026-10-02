function CommonField({
  label,
  error,
  helperText,
  required = false,
  className = "",
  id,
  ...props
}) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
          {label}
          {required && <span className="ml-1 text-red-400">*</span>}
        </label>
      )}

      <input
        id={id}
        {...props}
        className={`
          w-full
          rounded-xl
          border
          bg-zinc-950/60
          px-3.5 py-2.5
          text-sm text-white
          shadow-sm
          outline-none
          transition-all
          duration-200

          placeholder:text-zinc-500

          hover:border-white/20

          disabled:cursor-not-allowed
          disabled:bg-zinc-900
          disabled:text-zinc-500
          disabled:opacity-70

          ${
            error
              ? `
                border-red-400/60
                focus:border-red-400
                focus:ring-4
                focus:ring-red-500/15
              `
              : `
                border-white/10
                focus:border-violet-400
                focus:ring-4
                focus:ring-violet-500/15
              `
          }

          ${className}
        `}
      />

      {error ? (
        <p className="text-xs text-red-400">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-zinc-400">{helperText}</p>
      ) : null}
    </div>
  );
}

export default CommonField;
