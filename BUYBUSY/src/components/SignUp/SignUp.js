import { useRef } from "react";

import { useSignInContext } from "../SignIn/SignInContext";
import signUpcss from './SignUp.module.css';

export function SignUp(){

    const {handleSignUp}=useSignInContext();

    const emailRef=useRef("");
    const passwordRef=useRef("");
    const usernameRef=useRef("");

    return (
        <>
            <div className={signUpcss.signUpStyle}>
                <form>
                 <h1 className={signUpcss.signUpHeading}>Sign Up</h1>
                    <input className={signUpcss.formFields} ref={usernameRef} placeholder="Enter Name" type="text"></input>
                    <input className={signUpcss.formFields} ref={emailRef} placeholder="Enter Email" type="email"></input>
                    <input className={signUpcss.formFields} ref={passwordRef} placeholder="Enter password" type="password"></input>
                    <button  className={signUpcss.formFields}  style={{backgroundColor:"green",color:"white",width:"63%"}}  onClick={(event)=>handleSignUp(event,usernameRef.current.value,emailRef.current.value,passwordRef.current.value)}>Sign Up</button>
                </form>
            </div>
        </>
    )
}