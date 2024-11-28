import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <h2>Current Theme: {theme}</h2>;
};

export default DisplayTheme;
