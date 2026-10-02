import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Users from "@pages/users/Users";
import DefaultLayout from "@layouts/default/DefaultLayout.jsx";
import { ThemeContext } from "@context/ThemeContext";
import Navigation from "@components/Navigation/Navigation.jsx";
import UserDetails from "@pages/userDetails/UserDetails.jsx";
import UserProfile from "@pages/userDetails/children/userProfile/UserProfile.jsx";
import UserPosts from "@pages/userDetails/children/userPosts/UserPosts.jsx";
import UserOverview from "@pages/userDetails/UserOverview.jsx";
import NotFound from "@pages/notFound/NotFound.jsx";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute.jsx";
import Dashboard from "@pages/dashboard/Dashboard.jsx";
import Login from "@pages/login/Login.jsx";
import TestForm from "@pages/form/Form.jsx";
import TestFetch from "@pages/testFetch/TestFetch.jsx";
import UsersFetch from "@pages/testFetch/children/UsersFetch/UsersFetch.jsx";
import SearchFetch from "@pages/testFetch/children/SearchFetch/SearchFetch.jsx";
import UsersWithHook from "@pages/testFetch/children/UsersWithHook/UsersWithHook.jsx";
import QueryProvider from "@pages/queryProvider/QueryProvider.jsx";
import UsersQuery from "@pages/queryProvider/chilldren/usersQuery/UsersQuery.jsx";
import ZustandPage from "@pages/zustand/ZustandPage.jsx";
import Counter from "@pages/zustand/children/counter/Counter.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <DefaultLayout>
          <main
            className={[
                "relative bg-zinc-950 text-white",
              theme === "dark" ? "" : "bg-zinc-100 text-zinc-900",
            ].join(" ")}
            style={
              theme === "dark"
                ? {
                    backgroundImage:
                      "radial-gradient(circle at top, rgba(139,92,246,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(59,130,246,0.14), transparent 30%)",
                  }
                : undefined
            }
          >
            <div className="pointer-events-none overflow-hidden absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
              <div className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            <div className="relative z-10">
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

              <Route path="/query-provider" element={<QueryProvider />}>
                <Route path="users-query" element={<UsersQuery />} />
              </Route>

              <Route path="/zustand" element={<ZustandPage />}>
                <Route path="counter" element={<Counter />} />
              </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </DefaultLayout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
