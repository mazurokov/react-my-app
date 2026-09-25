import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Users from "./pages/users/Users";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import { ThemeContext } from "./context/ThemeContext";
import Navigation from "./components/Navigation/Navigation.jsx";
import UserDetails from "./pages/userDetails/UserDetails.jsx";
import UserProfile from "./pages/userDetails/children/userProfile/UserProfile.jsx";
import UserPosts from "./pages/userDetails/children/userPosts/UserPosts.jsx";
import UserOverview from "./pages/userDetails/UserOverview.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Login from "./pages/login/Login.jsx";
import TestForm from "./pages/form/Form.jsx";
import TestFetch from "./pages/testFetch/TestFetch.jsx";
import UsersFetch from "./pages/testFetch/children/UsersFetch/UsersFetch.jsx";
import SearchFetch from "./pages/testFetch/children/SearchFetch/SearchFetch.jsx";
import UsersWithHook from "./pages/testFetch/children/UsersWithHook/UsersWithHook.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

            {/*<button onClick={() => setIsAuthenticated((prev) => !prev)}>*/}
            {/*  Toggle Auth {isAuthenticated ? "Logout" : "Login"}*/}
            {/*</button>*/}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />}>
                <Route index element={<UserOverview />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="posts" element={<UserPosts />} />

                <Route path="*" element={<p>User section not found</p>} />
              </Route>

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

              <Route path="/form" element={<TestForm />} />

              <Route path="/fetch" element={<TestFetch />}>
                <Route path="users" element={<UsersFetch />} />
                <Route path="search" element={<SearchFetch />} />
                <Route path="users-with-hook" element={<UsersWithHook />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </DefaultLayout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
