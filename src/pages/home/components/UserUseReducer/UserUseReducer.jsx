import {useReducer, useState} from "react";

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
          user.id === action.id ? {...user, name: action.name} : user
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
    dispatch({type: "FETCH_START"});

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
  }

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
  }

  return (
    <div>
      <div style={{marginBottom: "10px"}}>
        {state.loading && <p>Loading...</p>}
        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
          {state.users.map((user) => (
            <p key={user.id}
               style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
              {user.name}
              <button onClick={() => dispatch({type: "DELETE_USER", id: user.id})}>
                Delete User with ID {user.id}
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_USER",
                    id: user.id,
                    name: "UPDATED",
                  })
                }
              >
                Update
              </button>

              {editingUserId === user.id ? (
                <button onClick={cancelEdit}>Cancel</button>
              ) : (
                <button
                  onClick={() => editingUser(user.id)}
                >
                  EDIT
                </button>)}
            </p>
          ))}
        </div>
        {state.error && <p style={{color: "red"}}>{state.error}</p>}
      </div>

      <div style={{marginBottom: "10px"}}>
        <form onSubmit={changeUsers}>
          <input type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)}
                 placeholder="Enter user name"/>
          <button type="submit">
            {editingUserId !== null ? "Save User" : "Add User"}
          </button>
        </form>
      </div>

      <div style={{display: "flex", gap: "15px"}}>
        <button onClick={() => dispatch({type: "FETCH_START"})}>Loading</button>
        <button onClick={() => dispatch({
          type: "FETCH_SUCCESS", users: [
            {id: 1, name: "Анна"},
            {id: 2, name: "Олег"},
          ],
        })}>Success
        </button>
        <button onClick={() => dispatch({
          type: "FETCH_ERROR", error: "Щось пішло не так",
        })}>Error
        </button>

        <button onClick={getUsers}>
          Get Users
        </button>
      </div>
    </div>
  )
}

export default User;