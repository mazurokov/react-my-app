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
import RefInterval from "./components/RefInterval/RefInterval.jsx";
import WrapperRefInterval from "./components/WrapperRefInterval/WrapperRefInterval.jsx";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={[
        "mx-auto max-w-6xl px-4 py-8",
        isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Головна сторінка (Home)</h1>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
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
