import { useContext } from "react";
import { ThemeContext } from "@context/ThemeContext";

import UserProfile from "@pages/home/components/UserProfile/UserProfile.jsx";
import Timer from "@pages/home/components/Timer/Timer.jsx";
import WindowWidth from "@pages/home/components/WindowWidth/WindowWidth.jsx";
import UserList from "@pages/home/components/UserList/UserList.jsx";
import Toolbar from "@components/Toolbar/Toolbar.jsx";
import Counter from "@pages/home/components/Counter/Counter.jsx";
import LoginForm from "@components/Form/LoginForm.jsx";
import MapList from "@pages/home/components/MapList/MapList.jsx";
import User from "@pages/home/components/User/User.jsx";
import Users from "@pages/home/components/Users/Users.jsx";
import NameInput from "@pages/home/components/NameInput/NameInput.jsx";
import NewTimer from "@pages/home/components/NewTimer/NewTimer.jsx";
import GetUsers from "@pages/home/components/GetUsers/GetUsers.jsx";
import AddUsers from "@pages/home/components/AddUsers/AddUsers.jsx";
import FilteredUsers from "@pages/home/components/FilteredUsers/FilteredUsers.jsx";
import UserSearch from "@pages/home/components/UserSearch/UserSearch.jsx";
import UserUseReducer from "@pages/home/components/UserUseReducer/UserUseReducer.jsx";
import TestUseRef from "@pages/home/components/UseRef/UseRef.jsx";
import RefCounter from "@pages/home/components/RefCounter/RefCounter.jsx";
import WrapperRefInterval from "@pages/home/components/WrapperRefInterval/WrapperRefInterval.jsx";

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
