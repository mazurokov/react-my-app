import { useState } from "react";
import useUsers from "../../hooks/useUsers";
import UserItem from "./components/UserItem.jsx";

function UsersQuery() {
  const {
    users,
    isPending,
    isFetching,
    error,
    refetch,
    createMutation,
    deleteMutation,
    updateMutation,
  } = useUsers();

  const [name, setName] = useState("");

  console.log("users:", users);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editingName, setEditingName] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        {isPending && <p className="text-sm text-gray-500">Loading...</p>}
        <p className="mb-3 text-sm text-gray-600">
          isFetching: {String(isFetching)}
        </p>

        {error && (
          <p className="text-sm text-red-600">Error: {error.message}</p>
        )}

        <div className="space-y-2">
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              editingUserId={editingUserId}
              editingName={editingName}
              setEditingUserId={setEditingUserId}
              setEditingName={setEditingName}
              updateMutation={updateMutation}
              deleteMutation={deleteMutation}
            />
          ))}
        </div>

        {deleteMutation.isError && (
          <p className="text-sm text-red-600">
            Error: {deleteMutation.error.message}
          </p>
        )}

        <button
          type="button"
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          disabled={isFetching}
          onClick={refetch}
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();

            createMutation.mutate(
              {
                name,
              },
              {
                onSuccess: () => {
                  setName("");
                },
              },
            );
          }}
        >
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed"
            disabled={createMutation.isPending}
          >
            {createMutation.isPending ? "Creating..." : "Create user"}
          </button>
        </form>
      </div>

      {createMutation.isError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          Error: {createMutation.error.message}
        </p>
      )}

      {createMutation.isSuccess && (
        <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          User created!
        </p>
      )}
    </div>
  );
}

export default UsersQuery;
