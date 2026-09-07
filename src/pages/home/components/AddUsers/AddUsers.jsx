import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [error, setError] = useState(null);

  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isLoadingGet, setIsLoadingGet] = useState(true);
  const [isDeletingArray, setIsDeletingArray] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const createUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers((prevState) => [...prevState, data]);
      setUserName("");
      setUserEmail("");
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
    }
  };

  const editUser = (id) => {
    setUserName(users.find((user) => user.id === id)?.name || "");
    setUserEmail(users.find((user) => user.id === id)?.email || "");
    setEditingUserId(id);
  };

  const handleSubmit = async (event) => {
    console.log("test event", event);

    event.preventDefault();

    if (editingUserId === null) {
      setIsLoadingPost(true);
      await createUser();
      setIsLoadingPost(false);
    } else {
      await saveUser(editingUserId);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Не вдалося отримати користувачів");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadingGet(false);
    }
  };

  const deleteUser = async (id) => {
    setIsDeletingArray((prevDeleting) => [...prevDeleting, id]);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Не вдалося видалити користувача");
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.message);
    } finally {
      setIsDeletingArray((prevDeleting) =>
        prevDeleting.filter((userId) => userId !== id),
      );
    }
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setUserName("");
    setUserEmail("");
  };

  const saveUser = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Не вдалося оновити користувача");
      }

      const updatedUser = await response.json();

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedUser : user)),
      );
      cancelEdit();
    } catch (error) {
      console.error("Error updating user:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      Users Component
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <button type="submit">
          {editingUserId === null ? "Add User" : "Save User"}
        </button>
      </form>
      {isLoadingGet ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={user.id}
            >
              <span>
                {user.name} - {user.email}
              </span>

              {editingUserId === user.id ? (
                <>
                  <button onClick={() => saveUser(user.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => editUser(user.id)}>Edit</button>

                  <button
                    disabled={isDeletingArray.includes(user.id)}
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    {isDeletingArray.includes(user.id)
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
