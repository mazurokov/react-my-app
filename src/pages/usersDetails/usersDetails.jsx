import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h1>User Details</h1>
      User ID: {id}
    </div>
  );
}

export default UserDetails;
