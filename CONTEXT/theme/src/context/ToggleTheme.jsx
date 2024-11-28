import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
