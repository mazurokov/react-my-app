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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <div className="mb-3">
        {state.loading && <p className="text-zinc-300">Loading...</p>}
        <div className="flex flex-col gap-2">
          {state.users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/30 p-3"
            >
              <span className="text-zinc-200">{user.name}</span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "DELETE_USER", id: user.id })}
                  className="rounded-xl bg-red-500/80 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-red-500"
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
                  className="rounded-xl bg-sky-500/80 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-sky-500"
                >
                  Update
                </button>

                {editingUserId === user.id ? (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => editingUser(user.id)}
                    className="rounded-xl bg-violet-500/80 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-violet-500"
                  >
                    EDIT
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {state.error && <p className="mt-2 text-red-400">{state.error}</p>}
      </div>

      <div className="mb-3">
        <form onSubmit={changeUsers} className="flex gap-2">
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="flex-1 rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
          >
            {editingUserId !== null ? "Save User" : "Add User"}
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => dispatch({ type: "FETCH_START" })}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
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
          className="rounded-xl bg-emerald-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
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
          className="rounded-xl bg-red-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Error
        </button>

        <button
          type="button"
          onClick={getUsers}
          className="rounded-xl bg-indigo-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Get Users
        </button>
      </div>
    </div>
  );
}

export default User;