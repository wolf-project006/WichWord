import React, { useEffect, useState } from 'react';
import '../App.css';

const BaseQuestion = ({
  score,
  setScore,
  view,
  setView,
  personalBest,
  setPersonalBest,
  nickname,
}) => {
  const [answer, setAnswer] = useState(''); // Player answer
  const [headAndTail, setHeadAndTail] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const FINAL_ROUND = 5;

  const [inputStyle, setInputStyle] = useState({
    // Setting up the styling here so we can dynamically change the input field width
    width: `${answer.length}ch`,
    fontSize: '3em',
    border: 'none',
    color: '#EF8354',
  });

  const weightedHead = 'qjzxvkwyfbghmpduclsntoiraewpfmcosiat';
  const weightedTail = 'qjzxvkwyfbghmpduclsntoiraefloryntdse';
  const headWeights = [
    1, 2, 3, 4, 9, 15, 22, 31, 40, 51, 64, 79, 94, 110, 127, 146, 169, 196, 225,
    259, 294, 331, 370, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500, 1600, 1700,
  ];
  const tailWeights = [
    1, 2, 3, 4, 9, 15, 22, 31, 40, 51, 64, 79, 94, 110, 127, 146, 169, 196, 225,
    259, 294, 331, 370, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300,
    2500, 2700, 2900,
  ];
  const maxCumulativeWeightHeads = headWeights[headWeights.length - 1];
  const maxCumulativeWeightTails = tailWeights[tailWeights.length - 1];

  function weightedRandomItems(items, weights, headOrTail) {
    const randomHeadNumber = maxCumulativeWeightHeads * Math.random();
    const randomTailNumber = maxCumulativeWeightTails * Math.random();

    if (headOrTail === 'head') {
      for (let i = 0; i < items.length; i++) {
        if (weights[i] >= randomHeadNumber) {
          return items[i];
        }
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        if (weights[i] >= randomTailNumber) {
          return items[i];
        }
      }
    }
  }

  // Set head and tail letters
  useEffect(() => {
    const head = weightedRandomItems(weightedHead, headWeights, 'head');
    const tail = weightedRandomItems(weightedTail, tailWeights, 'tail');
    const newArr = [head, tail];

    setHeadAndTail(newArr);
  }, [view]);

  // Change width of input dynamically
  useEffect(() => {
    const newInputStyle = { ...inputStyle };
    newInputStyle['width'] =
      answer.length <= 0 ? `${answer.length + 1}ch` : `${answer.length}ch`;
    setInputStyle(newInputStyle);
  }, [answer]);

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
    const answerToFetch = (
      headAndTail[0] +
      answer +
      headAndTail[1]
    ).toLowerCase();
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${answerToFetch}`
    );
    const parsedResult = await result.json();

    let points;
    // If word exists
    if (parsedResult[0] && parsedResult[0]['word']) {
      points = score + answer.length;
      setScore(points);
    }

    let round = parseInt(view.slice(-1));
    if (round === FINAL_ROUND) {
      if (points > personalBest) setPersonalBest(points);
      setView('ScoreScreen');
    } else {
      round += 1;
      setView(`BaseQuestion${round}`);
    }
    setAnswer('');
    setTimeLeft(10);
  }

  return (
    <>
      <p className="nickname">{nickname}</p>
      <p>{timeLeft}</p>
      <div>
        <h1 className="letter">{headAndTail[0]}</h1>
        <input
          id="playerAnswer"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={inputStyle}
        />
        <h1 className="letter">{headAndTail[1]}</h1>
      </div>
    </>
  );
};
export default BaseQuestion;
