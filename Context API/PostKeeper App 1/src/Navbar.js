import { useState } from "react";
import { usepostContextHook } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context
  // const [savedPosts, setSavedPosts] = useState([]);

  // const [showSavedList, setShowSavedList] = useState(false);

  const {savedPosts,showSavedList,handleReset,handleSaveToggle}=usepostContextHook();

  return (
    <div className="navbar">
      <span onClick={handleSaveToggle}>
        Saved Posts: {savedPosts.length}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
