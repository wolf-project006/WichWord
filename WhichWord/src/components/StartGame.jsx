import '../App.css';

const StartGame = ({ setView }) => {
  return (
    <>
      <div>
        <button onClick={() => { setView("BaseQuestion1") }}>Start</button>
      </div>
      <div className="marginTop_btn">
        <button onClick={() => { setView("Leaderboard") }}>Leaderboard</button>
      </div>
      <div className="marginTop_btn">
        <button onClick={() => { setView("MainMenu") }}>Logout</button>
      </div>
    </>
  )
}

export default StartGame;