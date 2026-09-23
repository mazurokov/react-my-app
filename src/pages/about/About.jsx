import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const goToUsers = () => {
    navigate("/users");
  };
  return (
    <div>
      <h1>About</h1>

      <button onClick={goToUsers}>Go to Users</button>
    </div>
  );
}
