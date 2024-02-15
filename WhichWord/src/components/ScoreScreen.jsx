import React, { useEffect, useState } from 'react';
import '../App.css';
import Firework from './Firework';

const ScoreScreen = ({ userName, score, setScore, setView, personalBest }) => {
  const [shouldDisplayFireworks, setShouldDisplayFireworks] = useState(false);

  useEffect(() => {
    const body = {
      userName: userName,
      currentScore: score,
    };

    async function patchScore() {
      console.log(score);
      // await fetch("https://wichword-backend.onrender.com/patchHighestScore", {
      await fetch('http://localhost:8080/patchHighestScore', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log('working!');

      setShouldDisplayFireworks(true);
    }

    patchScore();
  }, []);

  function handleOnClick() {
    setScore(0); // Reset score
    setView('StartGame');
    setShouldDisplayFireworks(false);
  }

  return (
    <>
      <h1>Personal Best:</h1>
      <h2>{personalBest}</h2>
      <h1>Score:</h1>
      <h2>{score}</h2>
      {shouldDisplayFireworks && (
        <div>
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
          <Firework />
        </div>
      )}

      <button onClick={handleOnClick}>Start over</button>
    </>
  );
};

export default ScoreScreen;
