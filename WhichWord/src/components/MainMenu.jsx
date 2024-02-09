import React from "react";

const MainMenu = ({ setView }) => {

  function handleOnClick() {
    setView("BaseQuestion");
  }

  return (
    <>
      <h1>WichWord</h1>
      <button onClick={handleOnClick}>Start</button>
    </>
  );
}

export default MainMenu;