import React, { useEffect, useState } from "react";
import '../App.css';

const BaseQuestion = ({ score, setScore, view, setView }) => {

  const [answer, setAnswer] = useState(""); // Player answer
  const [headAndTail, setHeadAndTail] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const FINAL_ROUND = 5;

  const [inputStyle, setInputStyle] = useState({ // Setting up the styling here so we can dynamically change the input field width
    width: `${answer.length}ch`,
    fontSize: "3em",
    border: "none",
    color: "#EF8354"
  });

  const weightedHead = "qjzxvkwyfbghmpduclsntoiraewpfmcosiat";
  const weightedTail = "qjzxvkwyfbghmpduclsntoiraefloryntdse";
  const alphabetWeights = [1, 2, 3, 4, 9, 15, 22, 31, 40, 51, 64, 79, 94, 110, 127, 146, 169, 196, 225, 259, 294, 331, 370, 409, 452, 509, 559, 609, 659, 709, 759, 809, 859, 909, 959, 1009];
  const maxCumulativeWeight = alphabetWeights[alphabetWeights.length - 1];

  function weightedRandomItems(items, weights) {

    const randomNumber = maxCumulativeWeight * Math.random();

    for (let i = 0; i < items.length; i++) {
      if (weights[i] >= randomNumber) {
        return items[i]
      }
    }
  }

  // Set head and tail letters
  useEffect(() => {
    const head = weightedRandomItems(weightedHead, alphabetWeights);
    const tail = weightedRandomItems(weightedTail, alphabetWeights);
    const newArr = [head, tail];

    setHeadAndTail(newArr);
  }, [view]);

  // Change width of input dynamically
  useEffect(() => {
    const newInputStyle = { ...inputStyle };
    newInputStyle["width"] = (answer.length <= 0) ? `${answer.length + 1}ch` : `${answer.length}ch`;
    setInputStyle(newInputStyle);
  }, [answer])

  // 10 second timer
  useEffect(() => {
    let interval;
    // Exit when time is up
    if (timeLeft === 0) {
      gameOver();
    } else {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

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

    let round = parseInt(view.slice(-1));
    if (round === FINAL_ROUND)
      setView("ScoreScreen");
    else {
      round += 1;
      setView(`BaseQuestion${round}`);
    }
    setAnswer("");
    setTimeLeft(10);
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