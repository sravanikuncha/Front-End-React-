import "./styles.css";
import {  ThemeContext, themeContextValue } from "./themeContext";
import { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { LanguageContext } from "./languageContext";

// get theme and language contexts here

export default function App() {
  // const [theme, setTheme] = useState("light");
  // const [language, setLanguage] = useState("English");
    // const {theme}=useContext(themeContextValue);

  return (
      <div>
        <LanguageContext>
          <ThemeContext>
          <Navbar />
          <Home />
          </ThemeContext>
          </LanguageContext>
      </div>
  );
}
