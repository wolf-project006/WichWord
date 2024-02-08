import React, { useEffect, useState } from "react";
import '../App.css';

const BaseQuestion = ({ setScore, setView }) => {

  const [answer, setAnswer] = useState(""); // Player answer
  const [heandAndTail, setHeadAndTail] = useState([]);

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  // Set head and tail letters
  useEffect(() => {
    const head = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const tail = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const newArr = [head, tail];

    setHeadAndTail(newArr);
  }, []);

  async function handleOnClick() {
    const answerToFetch = (heandAndTail[0] + answer + heandAndTail[1]).toLowerCase();
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${answerToFetch}`);
    const parsedResult = await result.json();

    // If word exists
    if (parsedResult[0] && parsedResult[0]["word"]) {
      const points = answer.length;
      setScore(points);
    }

    setView("ScoreScreen");
  }

  return (
    <>
      <div>
        <h1 className="letter">{heandAndTail[0]}</h1>
        <input type="text" onChange={(e) => setAnswer(e.target.value)} />
        <h1 className="letter">{heandAndTail[1]}</h1>
      </div>
      <button onClick={handleOnClick} value={answer} >Submit</button>
    </>
  );
}

export default BaseQuestion;