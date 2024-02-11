import { useState, useEffect } from 'react'

import './App.css'

const Leaderboard = ({ setView }) => {
  const [topScores, setTopScores] = useState([]);
  let rank;

  useEffect(() => {
    const temp = [
      { userName: "test", highestScore: 405, id: 1 },
      { userName: "test1", highestScore: 400, id: 2 },
      { userName: "test2", highestScore: 40, id: 3 },
    ];
    setTopScores(temp);
  }, [])
  // useEffect(() => {
  //   const data = fetch("tempPath/:limit");
  //   const topTen = data.json();
  // 
  //   rank = 1;
  // }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {topScores.map(data => (
            <tr key={data.id}>
              <td>{rank++}</td>
              <td>{data.userName}</td>
              <td>{data.highestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={setView("StartScreen")}>Back</button>
    </>
  )
}

export default Leaderboard;