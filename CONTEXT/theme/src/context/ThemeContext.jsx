import { createContext, useState } from "react";

// 1. Context oluştur
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 2. State ve toggleTheme fonksiyonunu tanımla
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        // 3. Provider ile value değerlerini paylaş
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
