import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function UsersQuery() {
  const [name, setName] = useState("");

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

  console.log("test data", data);
  console.log("test isPending", isPending);
  console.log("test isFetching", isFetching);
  console.log("test error", error);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <p>isFetching: {String(isFetching)}</p>

      {error && <p>Error: {error.message}</p>}

      {data && data.map((user) => <div key={user.id}>{user.name}</div>)}

      <button disabled={isFetching} onClick={refetch}>
        {isFetching ? "Refreshing..." : "Refresh"}
      </button>

      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default UsersQuery;
