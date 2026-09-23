import { useNavigate, useParams, useLocation } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("pathname:", location.pathname);
  console.log("search:", location.search);
  console.log("state:", location.state);
  console.log(location.state);

  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h1>User Details</h1>
      User ID: {id}
      <button onClick={() => navigate(-1)}> Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button
        onClick={() =>
          navigate("/users/2", {
            state: {
              from: "users",
            },
          })
        }
      >
        TEST Navigate to User 2 with state
      </button>
    </div>
  );
}

export default UserDetails;
