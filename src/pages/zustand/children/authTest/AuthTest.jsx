import useAuth from "@store/useAuth/useAuth.js";

function AuthTest() {
  const user = useAuth((state) => state.user);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);

  return (
    <div>
      <h1>Auth Test Page</h1>
      <p>This is a test page for authentication.</p>

      <div>
        <button
          disabled={isAuthenticated}
          onClick={() =>
            login({
              id: 1,
              name: "Anna",
            })
          }
        >
          Login
        </button>

        <button disabled={!isAuthenticated} onClick={logout}>
          Logout
        </button>

        {isAuthenticated ? (
          <p>Logged in as {user.name}</p>
        ) : (
          <p>Not authenticated</p>
        )}
      </div>
    </div>
  );
}

export default AuthTest;
