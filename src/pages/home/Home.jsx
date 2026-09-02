import UserProfile from "./components/UserProfile/UserProfile.jsx";
import Timer from "./components/Timer/Timer.jsx";
import WindowWidth from "./components/WindowWidth/WindowWidth.jsx";
import UserList from "./components/UserList/UserList.jsx";
import Toolbar from "../../components/Toolbar/Toolbar.jsx";
import Counter from "./components/Counter/Counter.jsx";
import LoginForm from "../../components/Form/LoginForm.jsx";
import MapList from "./components/MapList/MapList.jsx";
import Test from "./components/Test/Test.jsx";

export default function Home() {
    return <>
        <section className={"container"}>
            <h1>Головна сторінка (Home)</h1>
            <Test />

            <MapList />

            <Counter />

            <Toolbar />
            <br/>

            <UserProfile />
            <br/>
            <Timer />
            <br/>
            <WindowWidth />

            <LoginForm />
            <br/>
            -----------
            <br/>
            <h2>Список користувачів</h2>
            <p>Використання useEffect для отримання даних з API</p>
            <p>Використання useState для збереження стану компоненту</p>
            <p>Використання map для відображення списку користувачів</p>
            <p>Використання ключів для оптимізації рендерингу списку</p>
            <p>Використання CSS модулів для стилізації компоненту</p>
            <p>Використання React Router для навігації між сторінками</p>
            <p>Використання компонентів для розділення логіки та UI</p>
            <p>Використання хуків для управління станом та ефектами</p>
            <UserList />
        </section>
    </>;
}