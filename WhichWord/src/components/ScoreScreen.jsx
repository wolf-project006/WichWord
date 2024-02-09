import React from "react"

const ScoreScreen = ({ score, setScore, setView }) => {

  function handleOnClick() {
    setScore(0); // Reset score
    setView("MainMenu");
  }

  return (
    <>
      <h1>Score:</h1>
      <h2>{score}</h2>
      <button onClick={handleOnClick}>Start over</button>
    </>
  );
};

export default ScoreScreen;