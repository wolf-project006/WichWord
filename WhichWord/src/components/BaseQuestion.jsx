import React, { useEffect, useState } from "react";
import '../App.css';

const BaseQuestion = ({ score, setScore, view, setView }) => {

  const [answer, setAnswer] = useState(""); // Player answer
  const [headAndTail, setHeadAndTail] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [inputStyle, setInputStyle] = useState({ // Setting up the styling here so we can dynamically change the input field width
    width: `${answer.length}ch`,
    fontSize: "3em",
    border: "none",
    color: "cadetblue"
  });

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  // Set head and tail letters
  useEffect(() => {
    const head = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const tail = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const newArr = [head, tail];

    setHeadAndTail(newArr);
  }, []);

  // Change width of input dynamically
  useEffect(() => {
    const newInputStyle = { ...inputStyle };
    newInputStyle["width"] = (answer.length <= 0) ? `${answer.length + 1}ch` : `${answer.length}ch`;
    setInputStyle(newInputStyle);
  }, [answer])

  useEffect(() => {
    // Exit when time is up
    if (timeLeft === 0) {
      gameOver();
    };

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(interval);
    // Run effect everytime timeLeft changes
  }, [timeLeft]);

  async function gameOver() {
    const answerToFetch = (headAndTail[0] + answer + headAndTail[1]).toLowerCase();
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${answerToFetch}`);
    const parsedResult = await result.json();

    // If word exists
    if (parsedResult[0] && parsedResult[0]["word"]) {
      const points = score + answer.length;
      setScore(points);
    }

    setView("ScoreScreen");
  }

  return (
    <>
      <p>{timeLeft}</p>
      <div>
        <h1 className="letter">{headAndTail[0]}</h1>
        <input id="playerAnswer" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} style={inputStyle} />
        <h1 className="letter">{headAndTail[1]}</h1>
      </div>
    </>
  );
}

export default BaseQuestion;