import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export function NotFound(){

    const navigateMainPage=useNavigate();

    useEffect(()=>{
        // setTimeout(()=>{navigateMainPage("/")},3000);
        setTimeout(()=>{navigateMainPage(-2)},3000);
    },[])
    return (
        <>
        <h1>Item Not Found</h1>
        {/* <Link to="/">Main page</Link> */}
        </>
    );
}