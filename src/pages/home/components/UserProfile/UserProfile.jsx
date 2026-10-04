import { useState } from "react";

function UserProfile() {
  // Стан може бути об'єктом, масивом, числом чи рядком
  const [user, setUser] = useState({
 name: "Олена", age: 25 
});

  const updateName = () => {
    // ⚠️ НЕПРАВИЛЬНО (пряма мутація): user.name = 'Марія'; setUser(user);

    // ✅ ПРАВИЛЬНО (створення нового об'єкта через spread-оператор):
    setUser((prevUser) => ({
      ...prevUser,
      name: "Марія",
    }));
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <p className="text-sm text-zinc-300">User profile</p>
      <p className="mt-2 text-lg font-semibold text-white">
        Ім'я: {user.name}, Вік: {user.age}
      </p>
      <button
        type="button"
        onClick={updateName}
        className="mt-4 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
      >
        Змінити ім'я
      </button>
    </div>
  );
}

export default UserProfile;
