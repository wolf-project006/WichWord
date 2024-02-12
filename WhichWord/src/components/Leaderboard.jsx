import { useState, useEffect } from 'react'
import '../index.css';
import '../App.css';

const Leaderboard = ({ setView }) => {
  const [topScores, setTopScores] = useState([]);
  let rank = 1;

  useEffect(() => {
    async function fetchHighestUsers() {
      try {
        const data = await fetch("https://wichword-backend.onrender.com/highest_users");
        const parsedData = await data.json();

        const topTen = [];
        for (let i = 1; i <= 10; i++) {
          topTen.push(parsedData[i]);
        }
        setTopScores(topTen)
      } catch (e) {
        console.log(e);
      }
    }

    fetchHighestUsers();
  }, []);

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
            <tr key={rank}>
              <td>{rank++}</td>
              <td>{data.userName}</td>
              <td>{data.highestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="marginTop_btn" onClick={() => { setView("StartGame") }}>Back</button>
    </>
  )
}

export default Leaderboard;