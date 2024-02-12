import React from "react";
import '../App.css';

const MainMenu = ({ setView }) => {

  return (
    <>
      <h1>WichWord</h1>
      <div>
        <button onClick={() => { setView("Login") }}>Login</button>
      </div>
      <div>
        <button className="marginTop_btn" onClick={() => { setView("CreateAccount") }}>Signup</button>
      </div>
    </>
  );
}

export default MainMenu;