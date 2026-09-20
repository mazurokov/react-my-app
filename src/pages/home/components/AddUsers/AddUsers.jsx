import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [error, setError] = useState(null);

  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [isLoadingGet, setIsLoadingGet] = useState(true);
  const [isDeletingArray, setIsDeletingArray] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const createUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      });

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
    event.preventDefault();

    if (editingUserId === null) {
      setIsLoadingPost(true);

      try {
        await createUser();
      } finally {
        setIsLoadingPost(false);
      }
    } else {
      setIsLoadingEdit(true);

      try {
        await saveUser(editingUserId);
      } finally {
        setIsLoadingEdit(false);
      }
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

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
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Не вдалося видалити користувача");
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.message);
    } finally {
      setIsDeletingArray((prevDeleting) => prevDeleting.filter((userId) => userId !== id));
    }
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setUserName("");
    setUserEmail("");
  };

  const saveUser = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      });

      if (!response.ok) {
        throw new Error("Не вдалося оновити користувача");
      }

      const updatedUser = await response.json();

      setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? updatedUser : user)));
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
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">Users Component</h2>

      <form onSubmit={handleSubmit} className="mb-5 flex flex-wrap gap-3">
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Name"
          className="w-48 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
        />
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          placeholder="Email"
          className="w-48 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
        />
        <button
          disabled={isLoadingPost || isLoadingEdit}
          type="submit"
          className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
        >
          {editingUserId === null ? "Add User" : "Save User"}
        </button>
      </form>

      {isLoadingGet ? (
        <p className="text-slate-600">Loading users...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3"
            >
              <span className="text-slate-700">
                {user.name} - {user.email}
              </span>

              <div className="flex items-center gap-2">
                {editingUserId === user.id ? (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="rounded bg-slate-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-600"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => editUser(user.id)}
                    className="rounded bg-sky-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
                  >
                    Edit
                  </button>
                )}

                <button
                  type="button"
                  disabled={isDeletingArray.includes(user.id)}
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                  className="rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
                >
                  {isDeletingArray.includes(user.id) ? "Deleting..." : "Delete"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
