import React from 'react';
import '../App.css';

const MainMenu = ({ setView }) => {
  return (
    <>
      <h1 className="letter">W</h1>
      <h1 className="letter orange orange-border">ichWor</h1>
      <h1 className="letter">d</h1>
      <div>
        <button
          className="marginTop_btn"
          onClick={() => {
            setView('BaseQuestion1');
          }}
        >
          Quick-start
        </button>
      </div>
      <div>
        <button
          className="marginTop_btn"
          onClick={() => {
            setView('Login');
          }}
        >
          Login
        </button>
      </div>
      <div>
        <button
          className="marginTop_btn"
          onClick={() => {
            setView('CreateAccount');
          }}
        >
          Signup
        </button>
      </div>
    </>
  );
};

export default MainMenu;
