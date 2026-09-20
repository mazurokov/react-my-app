import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Users from "./pages/users/Users";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import { ThemeContext } from "./context/ThemeContext";
import UsersDetails from "./pages/usersDetails/usersDetails.jsx";

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
            <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-6 text-sm font-medium">
              <Link
                className={[
                  "rounded-xl px-4 py-2 transition",
                  theme === "dark"
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                ].join(" ")}
                to="/"
              >
                Головна
              </Link>
              <Link
                className={[
                  "rounded-xl px-4 py-2 transition",
                  theme === "dark"
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                ].join(" ")}
                to="/about"
              >
                Про нас
              </Link>
              <Link
                className={[
                  "rounded-xl px-4 py-2 transition",
                  theme === "dark"
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                ].join(" ")}
                to="/users"
              >
                Користувачі
              </Link>

              <Link
                className={[
                  "rounded-xl px-4 py-2 transition",
                  theme === "dark"
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                ].join(" ")}
                to="/users/1"
              >
                Користувач
              </Link>
            </nav>

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
