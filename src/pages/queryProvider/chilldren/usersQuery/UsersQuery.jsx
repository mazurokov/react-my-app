import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function UsersQuery() {
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const createUser = async (newUser) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      setName("");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  };

  const { data, isPending, isFetching, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5_000,
    gcTime: 10_000,
  });

  // console.log("test data", data);
  // console.log("test isPending", isPending);
  // console.log("test isFetching", isFetching);
  // console.log("test error", error);

  console.log("mutation data:", mutation.data);

  const deleteUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return response.json();
  };

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

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
          {data &&
            data.map((user) => (
              <div
                key={user.id}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
              >
                {user.name}

                <button
                  disabled={
                    deleteMutation.isPending &&
                    deleteMutation.variables === user.id
                  }
                  onClick={() => deleteMutation.mutate(user.id)}
                >
                  {deleteMutation.isPending &&
                  deleteMutation.variables === user.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            ))}
        </div>

        {deleteMutation.isError && (
          <p className="text-sm text-red-600">
            Error: {deleteMutation.error.message}
          </p>
        )}

        {deleteMutation.error && (
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

            mutation.mutate({
              name,
            });
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
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating..." : "Create user"}
          </button>
        </form>
      </div>

      {mutation.isError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {mutation.error.message}
        </p>
      )}

      {mutation.isSuccess && (
        <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          User created!
        </p>
      )}
    </div>
  );
}

export default UsersQuery;
