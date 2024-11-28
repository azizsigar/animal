import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div>
            <h2>Current Language: {language === "en" ? "English" : "Türkçe"}</h2>
            <button onClick={toggleLanguage}>
                Switch to {language === "en" ? "Türkçe" : "English"}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
