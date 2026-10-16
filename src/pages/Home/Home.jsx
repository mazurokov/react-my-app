import { useContext } from "react";
import { ThemeContext } from "@context/ThemeContext";

import UserProfile from "@pages/Home/Components/UserProfile/UserProfile.jsx";
import Timer from "@pages/Home/Components/Timer/Timer.jsx";
import WindowWidth from "@pages/Home/Components/WindowWidth/WindowWidth.jsx";
import UserList from "@pages/Home/Components/UserList/UserList.jsx";
import Toolbar from "@components/Toolbar/Toolbar.jsx";
import Counter from "@pages/Home/Components/Counter/Counter.jsx";
import LoginForm from "@components/Form/LoginForm.jsx";
import MapList from "@pages/Home/Components/MapList/MapList.jsx";
import User from "@pages/Home/Components/User/User.jsx";
import Users from "@pages/Home/Components/Users/Users.jsx";
import NameInput from "@pages/Home/Components/NameInput/NameInput.jsx";
import NewTimer from "@pages/Home/Components/NewTimer/NewTimer.jsx";
import GetUsers from "@pages/Home/Components/GetUsers/GetUsers.jsx";
import AddUsers from "@pages/Home/Components/AddUsers/AddUsers.jsx";
import FilteredUsers from "@pages/Home/Components/FilteredUsers/FilteredUsers.jsx";
import UserSearch from "@pages/Home/Components/UserSearch/UserSearch.jsx";
import UserUseReducer from "@pages/Home/Components/UserUseReducer/UserUseReducer.jsx";
import TestUseRef from "@pages/Home/Components/UseRef/UseRef.jsx";
import RefCounter from "@pages/Home/Components/RefCounter/RefCounter.jsx";
import WrapperRefInterval from "@pages/Home/Components/WrapperRefInterval/WrapperRefInterval.jsx";

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

          {theme}
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
