import { createContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

// Theme provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const ToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to update the `html` class based on the theme
  useEffect(() => {
    const htmlElement = document.documentElement; // This selects the <html> element
    if (theme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
