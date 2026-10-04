import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  addUser,
  updateUserName,
  removeUser,
  clearUsers,
} from "@store/redux/usersSlice.js";

function ReduxUsers() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const addNewUser = () => {
    if (!userName.trim()) return;

    dispatch(
      addUser({
        id: crypto.randomUUID(),
        name: userName.trim(),
      }),
    );
    setUserName("");
  };

  const updateName = (id) => {
    if (!userName.trim()) return;

    dispatch(
      updateUserName({
        id: id,
        name: userName.trim(),
      }),
    );
    setUserName("");
  };

  const removeCurrentUser = (id) => {
    dispatch(removeUser(id));
  };

  const removeAllUsers = () => {
    dispatch(clearUsers());
  };

  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950/40 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/80">
            users
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Redux Users</h2>
        </div>

        <button
          type="button"
          onClick={removeAllUsers}
          className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-100 transition hover:bg-rose-500/15"
        >
          Clear users
        </button>
      </div>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter username"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
        />

        <button
          type="button"
          onClick={addNewUser}
          className="rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-500/90 to-blue-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Add user
        </button>
      </div>

      <ul className="space-y-3">
        {users.length ? (
          users.map((user) => (
            <li
              key={user.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-base font-medium text-zinc-100">{user.name}</span>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => updateName(user.id)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
                >
                  Update Name
                </button>

                <button
                  type="button"
                  onClick={() => removeCurrentUser(user.id)}
                  className="rounded-lg border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-100 transition hover:bg-rose-500/15"
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="rounded-2xl border border-dashed border-white/10 bg-slate-900/30 p-6 text-center text-sm text-zinc-400">
            No users yet. Add the first one.
          </li>
        )}
      </ul>
    </section>
  );
}

export default ReduxUsers;
