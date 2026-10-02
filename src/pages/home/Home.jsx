import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import UserProfile from "./components/UserProfile/UserProfile.jsx";
import Timer from "./components/Timer/Timer.jsx";
import WindowWidth from "./components/WindowWidth/WindowWidth.jsx";
import UserList from "./components/UserList/UserList.jsx";
import Toolbar from "../../components/Toolbar/Toolbar.jsx";
import Counter from "./components/Counter/Counter.jsx";
import LoginForm from "../../components/Form/LoginForm.jsx";
import MapList from "./components/MapList/MapList.jsx";
import User from "./components/User/User.jsx";
import Users from "./components/Users/Users.jsx";
import NameInput from "./components/NameInput/NameInput.jsx";
import NewTimer from "./components/NewTimer/NewTimer.jsx";
import GetUsers from "./components/GetUsers/GetUsers.jsx";
import AddUsers from "./components/AddUsers/AddUsers.jsx";
import FilteredUsers from "./components/FilteredUsers/FilteredUsers.jsx";
import UserSearch from "./components/UserSearch/UserSearch.jsx";
import UserUseReducer from "./components/UserUseReducer/UserUseReducer.jsx";
import TestUseRef from "./components/UseRef/UseRef.jsx";
import RefCounter from "./components/RefCounter/RefCounter.jsx";
import WrapperRefInterval from "./components/WrapperRefInterval/WrapperRefInterval.jsx";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={[
        "mx-auto max-w-6xl px-4 py-8",
        isDark
          ? "text-white"
          : "text-zinc-900",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-tight text-white">Головна сторінка (Home)</h1>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
        >
          Toggle Theme
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <WrapperRefInterval />
        <RefCounter />
        <TestUseRef />
        <UserUseReducer />
        <Counter />
        <UserSearch />
        <FilteredUsers />
        <AddUsers />
        <GetUsers />
        <NewTimer />
        <NameInput />
        <Users />
        <User />
        <MapList />
        <Toolbar />
        <UserProfile />
        <Timer />
        <WindowWidth />
        <LoginForm />
        <UserList />
      </div>
    </section>
  );
}
