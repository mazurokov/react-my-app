import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Users from "./pages/users/Users";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import { ThemeContext } from "./context/ThemeContext";
import UsersDetails from "./pages/usersDetails/usersDetails.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <DefaultLayout>
          <main
            className={[
              "min-h-screen",
              theme === "dark"
                ? "bg-slate-950 text-white"
                : "bg-slate-100 text-slate-900",
            ].join(" ")}
          >
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UsersDetails />} />
            </Routes>
          </main>
        </DefaultLayout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
