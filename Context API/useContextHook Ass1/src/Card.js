import { cardContext } from "./context";
//Refactor this to use the useContext hook
import { useContext } from "react";
export const Card = () => {

  const value=useContext(cardContext);

  return (
    // <cardContext.Consumer>
    //   {(value) => {
    //     return (
    //       <div className="card" style={{ backgroundColor: value.color }}>
    //         <h3>{value.text}</h3>
    //       </div>
    //     );
    //   }}
    // </cardContext.Consumer>
    <div className="card" style={{ backgroundColor: value.color }}>
             <h3>{value.text}</h3>
          </div>
  );
};
