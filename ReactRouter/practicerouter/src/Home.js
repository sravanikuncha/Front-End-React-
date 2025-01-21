import { Link } from "react-router-dom";

export function Home(){
    return (
        <>
        <h1>Home  page</h1>
        <Link to="/home1">Home1 Page</Link>
        <br/>
        <Link to="/">Main page</Link>
        </>
    )
}