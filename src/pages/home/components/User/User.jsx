import { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Олена", age: 25 });

  const updateAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };
  return (
    <div>
      <p>Ім'я: {user.name}</p>
      <p>Вік: {user.age}</p>
      <button onClick={updateAge}>Збільшити вік</button>
    </div>
  );
}

export default User;
