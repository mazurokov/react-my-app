const BASE_URL =
  "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

const deleteUser = async (id) => {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
};

const createUser = async (newUser) => {
  const response = await fetch(BASE_URL, {
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

const updateUser = async ({ id, name }) => {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
 name 
}),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
};

export { fetchUsers, deleteUser, updateUser, createUser };