import React from 'react'
import {Auth,Provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate(Auth);
    const signIn =  ()=>{
        signInWithPopup(Auth, Provider).then(res => console.log("Signed in"), navigate('/')).catch(err=>console.log(err));
        
    }
  return (
    <div className="login-page">
        <h1>
            Login
        </h1>
        <button onClick={signIn
        } className="button">
            Sign in with Google!
        </button>
    </div>
  )
}

export default Login