import UserProfile from "./components/UserProfile/UserProfile.jsx";
import Timer from "./components/Timer/Timer.jsx";
import WindowWidth from "./components/WindowWidth/WindowWidth.jsx";
import LoginForm from "../../components/Form/LoginForm.jsx";
import UserList from "./components/UserList/UserList.jsx";
import Toolbar from "../../components/Toolbar/Toolbar.jsx";

export default function Home() {
    return <>
        <section className={"container"}>
            <h1>Головна сторінка (Home)</h1>

            <Toolbar />
            <br/>

            <UserProfile />
            <br/>
            <Timer />
            <br/>
            <WindowWidth />

            <LoginForm />
            <br/>
            <UserList />
        </section>
    </>;
}