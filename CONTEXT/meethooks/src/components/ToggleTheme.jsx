import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import DisplayTheme from "../components/DisplayTheme.jsx";

const ToggleTheme = () => {
  const { ToggleTheme } = useContext(ThemeContext); // Get the toggle function from context

  return (
    <>
      <DisplayTheme /> {/* Display the current theme */}
      <button onClick={ToggleTheme}>Change Theme</button>
    </>
  );
};

export default ToggleTheme;
