import React, { useEffect } from "react"
import '../App.css';

const ScoreScreen = ({ score, setScore, setView, personalBest }) => {

  function handleOnClick() {
    setScore(0); // Reset score
    setView("StartGame");
  }

  return (
    <>
      <h1>Personal Best</h1>
      <h2>{personalBest}</h2>
      <h1>Score:</h1>
      <h2>{score}</h2>

      <button onClick={handleOnClick}>Start over</button>
    </>
  );
};

export default ScoreScreen;