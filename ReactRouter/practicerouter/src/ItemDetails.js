import { useParams } from "react-router-dom"
import { itemdata } from "./Navbar";
import { NotFound } from "./NotFound";

export function ItemDetails(){

    const params=useParams();
    const item=itemdata.find((eachItem)=>eachItem.id==params.itemID);
    
    return(
        <>
        <h1>Items page</h1>
        {/* { item && <>
        <p>Showing {params.itemID} details</p>
        <p>{item.desc}</p>
        </>
        } */}

        <p>Showing {params.itemID} details</p>
        <p>{item.desc}</p>

        {/* {!item && <NotFound/>} */}
        </>
    )
}