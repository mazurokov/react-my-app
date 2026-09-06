import { useState } from "react";

function UserProfile() {
  // Стан може бути об'єктом, масивом, числом чи рядком
  const [user, setUser] = useState({ name: "Олена", age: 25 });

  const updateName = () => {
    // ⚠️ НЕПРАВИЛЬНО (пряма мутація): user.name = 'Марія'; setUser(user);

    // ✅ ПРАВИЛЬНО (створення нового об'єкта через spread-оператор):
    setUser((prevUser) => ({
      ...prevUser,
      name: "Марія",
    }));
  };

  return (
    <div>
      <p>
        Імя: {user.name}, Вік: {user.age}
      </p>
      <button onClick={updateName}>Змінити ім'я</button>
    </div>
  );
}

export default UserProfile;
