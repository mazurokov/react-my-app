const users = ["Анна", "Олег", "Марія"];

function MapList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}
export default MapList;
