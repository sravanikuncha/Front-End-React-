import { Link, Outlet } from "react-router-dom";

export function Home1(){
    return (
        <>
        <h1>Home1  page</h1>
        <Link to="/home">Home Page</Link>
        <br/>
        <Link to="/">Main page</Link>
        <Outlet/>
     </>
    )
}