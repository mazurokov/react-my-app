import { useState, useEffect } from "react";

import styles from "./Users.module.sass";

function Users() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [users, setUsers] = useState([{ id: 1, name: "Jack", age: 22 }]);

  const newUser = (event) => {
    event.preventDefault();

    if (!name || !age) {
      return;
    }

    const id = crypto.randomUUID();

    const newUser = {
      name,
      age: Number(age),
      id,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("");
    setAge("");
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  useEffect(() => {
    console.log("Компонент відрендерився");
  }, []);

  return (
    <div>
      <h2>Компонент Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              Ім'я: {user.name}, Вік: {user.age}
            </p>

            <button onClick={() => deleteUser(user.id)}>Видалити</button>
          </li>
        ))}
      </ul>

      <form className={styles["user-form"]} onSubmit={newUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Ім'я"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          type="number"
          placeholder="Вік"
        />
        <button>Додати</button>
      </form>
    </div>
  );
}

export default Users;
