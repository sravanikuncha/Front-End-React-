import { Link } from "react-router-dom";
import { useRef } from "react";

import { useSignInContext } from "./SignInContext";
import signcss from './SignIn.module.css';


export function SignIn(){

    const {handleSignIn}=useSignInContext();
    const emailRef=useRef("");
    const passwordRef=useRef("");
  
    return (
            <div className={signcss.signInStyle}>
                <form>
                    <h1 className={signcss.signInHeading}>Sign In</h1>
                    <input className={signcss.formFields} ref={emailRef} placeholder="Enter Email" type="email"></input><br/>
                    <input className={signcss.formFields} ref={passwordRef} placeholder="Enter password" type="password"></input><br/>
                    <button style={{backgroundColor:"green",color:"white",width:"63%"}} className={signcss.formFields} onClick={(event)=>handleSignIn(event,emailRef.current.value,passwordRef.current.value)}>SignIn</button><br/>
                </form>
                <button  style={{backgroundColor:"#237ebf",width:"63%"}} className={signcss.formFields}><Link style={{textDecoration:"none",color:"white"}} to="/signUp">SignUp</Link></button>
            </div>
    )
}