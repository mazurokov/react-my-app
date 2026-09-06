import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [error, setError] = useState(null);

  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isLoadingGet, setIsLoadingGet] = useState(true);
  const [isDeletingArray, setIsDeletingArray] = useState([]);

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

  const addUsers = async (event) => {
    event.preventDefault();
    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    setIsLoadingPost(true);
    await createUser();
    setIsLoadingPost(false);
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      Add Users Component
      <form onSubmit={addUsers}>
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
        <button disabled={isLoadingPost} type="submit">
          Add User
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
              <button
                disabled={isDeletingArray.includes(user.id)}
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {isDeletingArray.includes(user.id) ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
