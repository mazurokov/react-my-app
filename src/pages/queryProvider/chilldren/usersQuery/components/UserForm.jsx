function UserForm({ isPending, onSubmit, name, onNameChange }) {
  return (
    <form className="mt-4 space-y-3" onSubmit={onSubmit}>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Name
      </label>

      <input
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed"
        disabled={isPending}
      >
        {isPending ? "Creating..." : "Create user"}
      </button>
    </form>
  );
}

export default UserForm;
