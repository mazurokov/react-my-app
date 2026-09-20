import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import { ThemeContext } from "./context/ThemeContext";

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
              theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900",
            ].join(" ")}
          >
            <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-10">
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  Hello Tailwind
                </h1>
              </div>
            </div>

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
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </DefaultLayout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
