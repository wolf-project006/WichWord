import React from "react";
import '../App.css';

const ScoreScreen = ({ score, setScore, setView }) => {

  function handleOnClick() {
    setScore(0); // Reset score
    setView("MainMenu");
  }

  return (
    <>
      <h2 className="orange">Score:</h2>
      <h1>{score}</h1>
      <button onClick={handleOnClick}>Start over</button>
    </>
  );
};

export default ScoreScreen;