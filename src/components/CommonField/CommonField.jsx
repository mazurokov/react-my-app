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
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        id={id}
        {...props}
        className={`
          w-full
          rounded-lg
          border
          bg-white
          px-3.5 py-2.5
          text-sm text-gray-900
          shadow-sm
          outline-none
          transition-all
          duration-200

          placeholder:text-gray-400

          hover:border-gray-400

          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-500
          disabled:opacity-70

          ${
            error
              ? `
                border-red-500
                focus:border-red-500
                focus:ring-4
                focus:ring-red-500/10
              `
              : `
                border-gray-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              `
          }

          ${className}
        `}
      />

      {error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
}

export default CommonField;
