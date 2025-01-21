import { ThemeContext,themeContextValue } from "./themeContext";
import { LanguageContext,languageContextValue } from "./languageContext";
import { useContext } from "react";


export const Navbar = () => {
  // get theme and lanauge contexts here

  const {theme,setTheme}=useContext(themeContextValue);
  const {language}=useContext(languageContextValue);

  const handleTheme=()=>{
    const themeColor=theme=="dark"?"light":"dark";
    setTheme(themeColor);
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={handleTheme}>{theme=="dark"?"Light Theme" :"Dark theme"}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
