import React, { useState } from "react"

const ScoreScreen = ({ score, setScore, setView, personalBest, setPersonalBest }) => {

  if(score > personalBest){
    setPersonalBest(score)
  };
  // updates PB 

  function handleOnClick() {
    setScore(0); // Reset score
    setView("MainMenu");
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