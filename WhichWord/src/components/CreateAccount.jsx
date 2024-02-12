import React, { useState } from "react";
import './CreateAccount.css';

const CreateAccount = ({ setUserName, setView }) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameTaken, setNameTaken] = useState("");

    async function handleOnClick() {
        const body = {
            user_name: name,
            password: password
        };
        try {
            // console.log("trying");
            // const result = await fetch("https://wichword-backend.onrender.com/signup", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(body),
            // });
            // const parsed = await result.json();
            // console.log(parsed);
            // setUserName(name);
            // setNameTaken("");
            setView("StartGame");
        } catch {
            setNameTaken("Username is taken");
        }

    }

    return (
        <>
            <div className="container">
                <h2 className="white">Create an account</h2>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div className="submit-container">
                <button className="submit" onClick={handleOnClick}>Sign Up</button>
            </div>
            <p>{nameTaken}</p>
            <div className="submit-container">
                <button className="submit" onClick={(e) => { setView("MainMenu") }}>Back</button>
            </div>

        </>
    )
}

export default CreateAccount