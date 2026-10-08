import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "@context/ThemeContext";
import Home from "@pages/home/Home";

import Navigation from "@components/Navigation/Navigation.jsx";
import DefaultLayout from "@layouts/default/DefaultLayout.jsx";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute.jsx";

const About = lazy(() => import("@pages/about/About"));
const Users = lazy(() => import("@pages/users/Users"));
const UserDetails = lazy(() => import("@pages/userDetails/UserDetails.jsx"));
const UserProfile = lazy(
  () => import("@pages/userDetails/children/userProfile/UserProfile.jsx"),
);
const UserPosts = lazy(
  () => import("@pages/userDetails/children/userPosts/UserPosts.jsx"),
);
const UserOverview = lazy(() => import("@pages/userDetails/UserOverview.jsx"));
const NotFound = lazy(() => import("@pages/notFound/NotFound.jsx"));

const Dashboard = lazy(() => import("@pages/dashboard/Dashboard.jsx"));
const Login = lazy(() => import("@pages/login/Login.jsx"));
const TestForm = lazy(() => import("@pages/form/Form.jsx"));
const TestFetch = lazy(() => import("@pages/testFetch/TestFetch.jsx"));
const UsersFetch = lazy(
  () => import("@pages/testFetch/children/UsersFetch/UsersFetch.jsx"),
);
const SearchFetch = lazy(
  () => import("@pages/testFetch/children/SearchFetch/SearchFetch.jsx"),
);
const UsersWithHook = lazy(
  () => import("@pages/testFetch/children/UsersWithHook/UsersWithHook.jsx"),
);
const QueryProvider = lazy(
  () => import("@pages/queryProvider/QueryProvider.jsx"),
);
const UsersQuery = lazy(
  () => import("@pages/queryProvider/chilldren/usersQuery/UsersQuery.jsx"),
);
const ZustandPage = lazy(() => import("@pages/zustand/ZustandPage.jsx"));
const Counter = lazy(
  () => import("@pages/zustand/children/counter/Counter.jsx"),
);
const CounterDisplay = lazy(
  () => import("@pages/zustand/children/counter/CounterDisplay.jsx"),
);
const ReduxPage = lazy(() => import("@pages/redux/ReduxPage.jsx"));
const ReduxUsers = lazy(
  () => import("@pages/redux/children/UseSelector/ReduxUsers.jsx"),
);
const CartTest = lazy(
  () => import("@pages/redux/children/CartTest/CartTest.jsx"),
);
const MemoTest = lazy(() => import("@pages/MemoTest/MemoTest.jsx"));

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
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

              <Suspense>
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
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />

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
                    <Route
                      path="counter-display"
                      element={<CounterDisplay />}
                    />
                  </Route>

                  <Route path="/redux" element={<ReduxPage />}>
                    <Route path="users" element={<ReduxUsers />} />
                    <Route path="cart" element={<CartTest />} />
                  </Route>

                  <Route path="/memo-test" element={<MemoTest />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </DefaultLayout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
