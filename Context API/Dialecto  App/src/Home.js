import { useContext } from "react";
import "./styles.css";
import { LanguageContext,languageContextValue } from "./languageContext";
import { themeContextValue } from "./themeContext";

const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};

export const Home = () => {
  // get language context here
  const {language,setLanguage}=useContext(languageContextValue);
  const {theme}=useContext(themeContextValue)
  

  return (
    <div className={`App ${theme}`}>
      <div className="language-container">
        {/* add eventlister on the span to change the language prefrences  */}
        <span onClick={()=>setLanguage("English")}>English</span>
        <span onClick={()=>setLanguage("Hindi")}>Hindi</span>
        <span onClick={()=>setLanguage("Marathi")}>Marathi</span>
      </div>
      <p>{content[language]}</p>
    </div>
  );
};
