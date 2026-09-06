import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Toolbar() {
  // Дістаємо дані та функцію з контексту
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#FFF",
        padding: "20px",
      }}
    >
      <p>Поточна тема: {theme}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
}

export default Toolbar;
