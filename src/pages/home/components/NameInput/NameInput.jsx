import { useState, useEffect } from "react";

function NameInput() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Ім'я змінилося:", name);
  }, [name]);

  return (
    <div>
      <p>{name}</p>

      <br />

      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default NameInput;
