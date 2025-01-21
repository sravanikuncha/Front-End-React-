import { useEffect, useState } from "react";
import { createContext,useContext } from "react";
import { busybuydb } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const signincontext=createContext();

export const useSignInContext=()=>{
    const value=useContext(signincontext);
    return value;
}

export function SignInContext({children}){

    const [user,setUser]=useState({});
    const auth=getAuth();

    const navigate=useNavigate();

    useEffect(()=>{
        if(user.email){
            sessionStorage.setItem("email",user.email);
        }else{
            sessionStorage.removeItem("email")
        }
    },[user])

    const handleSignIn=async(e,email,password)=>{
        e.preventDefault();
        try {
           await signInWithEmailAndPassword(auth, email, password);
            setUser({email,password});
            console.log('User signed in successfully!');
            navigate("/");
        } catch (error) {
            console.log("Invalid Crednetials");
        }
    }

    const handleLogout=()=>{
        setUser({});
        console.log("Log Out Successful");
    }

    const handleSignUp=async(e,username,email,password)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up successfully!');
            setUser({email,password});
            navigate("/");
            } catch (error) {
                console.log("Error Signing Up")
                console.log(error);
            }
    }

    return (
        <signincontext.Provider value={{handleSignIn,handleSignUp,handleLogout,user}}>
            {children}
        </signincontext.Provider>
    )

}