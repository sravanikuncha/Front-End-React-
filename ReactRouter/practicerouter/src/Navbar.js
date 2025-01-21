import { Link, Outlet } from "react-router-dom";
export const itemdata=[{id:"item-1",desc:"Item-1 Description"},{id:"item-2",desc:"Item-2 Description"},{id:"item-3",desc:"Item-3 Description"}]

export function Navbar(){


    return (
        <>
         <Link to="/home">Home</Link> 
         &nbsp;
         &nbsp;
         <Link to="/home1">Home1</Link>
         <br/>
        
         <Outlet/>

        <h1>Item Details Link</h1>
         {/* <Link to="/items/Item-1">Item1</Link>
        <br/>
        <Link to="/items/Item-2">Item2</Link>
        <br/>
        <Link to="/items/Item-3">Item3</Link>
        <br/> */}
        {itemdata.map((eachItem)=>
            <><Link to={`/items/${eachItem.id}`}>{eachItem.id}</Link>
            <br/></>
        )}
        </>
    );
}