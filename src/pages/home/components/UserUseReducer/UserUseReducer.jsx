import { useReducer, useState } from "react";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

function reducer(state, action) {
  const filterUsers = (id) => state.users.filter((user) => user.id !== id);

  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };

    case "DELETE_USER":
      return {
        ...state,
        users: filterUsers(action.id),
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, name: action.name } : user,
        ),
      };

    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        users: [],
      };
    default:
      return state;
  }
}

function User() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [userName, setUserName] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  const getUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      dispatch({
        type: "FETCH_SUCCESS",
        users: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        error: error.message,
      });
    }
  };

  const changeUsers = (e) => {
    e.preventDefault();

    const name = userName.trim();

    if (!name) {
      return;
    }

    if (editingUserId !== null) {
      dispatch({
        type: "UPDATE_USER",
        id: editingUserId,
        name: userName,
      });
      setEditingUserId(null);
      setUserName("");
      return;
    }

    if (userName.trim()) {
      const newUser = {
        id: crypto.randomUUID(),
        name: userName.trim(),
      };

      dispatch({
        type: "ADD_USER",
        user: newUser,
      });

      setUserName("");
    }
  };

  const editingUser = (id) => {
    const user = state.users.find((user) => user.id === id);

    if (user) {
      setUserName(user.name);
      setEditingUserId(id);
    }
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setUserName("");
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-3">
        {state.loading && <p className="text-slate-600">Loading...</p>}
        <div className="flex flex-col gap-2">
          {state.users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3"
            >
              <span className="text-slate-700">{user.name}</span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "DELETE_USER", id: user.id })}
                  className="rounded bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-red-600"
                >
                  Delete User with ID {user.id}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_USER",
                      id: user.id,
                      name: "UPDATED",
                    })
                  }
                  className="rounded bg-sky-500 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
                >
                  Update
                </button>

                {editingUserId === user.id ? (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="rounded bg-slate-500 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-slate-600"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => editingUser(user.id)}
                    className="rounded bg-violet-500 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-violet-600"
                  >
                    EDIT
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {state.error && <p className="mt-2 text-red-500">{state.error}</p>}
      </div>

      <div className="mb-3">
        <form onSubmit={changeUsers} className="flex gap-2">
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="flex-1 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
          />
          <button
            type="submit"
            className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            {editingUserId !== null ? "Save User" : "Add User"}
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => dispatch({ type: "FETCH_START" })}
          className="rounded bg-slate-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
        >
          Loading
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "FETCH_SUCCESS",
              users: [
                { id: 1, name: "Анна" },
                { id: 2, name: "Олег" },
              ],
            })
          }
          className="rounded bg-green-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-600"
        >
          Success
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "FETCH_ERROR",
              error: "Щось пішло не так",
            })
          }
          className="rounded bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Error
        </button>

        <button
          type="button"
          onClick={getUsers}
          className="rounded bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
        >
          Get Users
        </button>
      </div>
    </div>
  );
}

export default User;