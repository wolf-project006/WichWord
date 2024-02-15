import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCrown } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const ScoreScreen = ({ userName, score, setScore, setView, personalBest }) => {
  useEffect(() => {
    const body = {
      userName: userName,
      currentScore: score,
    };

    async function patchScore() {
      console.log(score);
      // await fetch("https://wichword-backend.onrender.com/patchHighestScore", {
      await fetch("http://localhost:8080/patchHighestScore", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log('working!');
    }

    patchScore();
  }, []);

  function handleOnClick() {
    setScore(0); // Reset score
    setView('StartGame');
  }

  return (
    <>
      <h1>Personal Best:</h1>
      <h2><FontAwesomeIcon icon={faCrown} style={{ paddingRight: "5px" }}/><span style={{ paddingLeft: '10px' }}>{personalBest}</span></h2>
      <h1>Score:</h1>
      <h2><FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: "5px" }} />
    <span style={{ paddingLeft: '10px' }}>{score}</span></h2>

      <button onClick={handleOnClick}>Start over</button>
    </>
  );
};

export default ScoreScreen;
