import { useState, useEffect } from "react";
import "../App.css";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
    
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div >
      <button onClick={toggleDarkMode}>changemode</button>
      <p>asdsad</p>
    </div>
  );
}
