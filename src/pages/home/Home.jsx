import styles from "./Home.module.sass";
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

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <section
        className={
          "container " + (theme === "dark" ? styles.dark : styles.light)
        }
      >
        <button onClick={toggleTheme}>Toggle Theme</button>

        <h1>Головна сторінка (Home)</h1>
        <div className={"test " + styles["home-components"]}>
          <FilteredUsers />

          <Counter />

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
    </>
  );
}
