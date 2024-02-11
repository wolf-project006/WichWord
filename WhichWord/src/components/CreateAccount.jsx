import React, { useState } from "react";
import './CreateAccount.css'

const CreateAccount = ()=>{

    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const [action, setAction]= useState("Sign Up")





    return (
        <>
        <div className="container">
            <header>{action}</header>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="Name" />
            </div>
            <div className="input">
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit" onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className="submit" onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        
        </>
    )
}

export default CreateAccount