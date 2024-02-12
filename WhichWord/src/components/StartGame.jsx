import '../App.css';

const StartGame = ({ setView }) => {
  return (
    <>
      <div>
        <p>Welcome to <span class="orange">WhichWord</span>!
          <br /> The objective of the game is to come up with a word that <span className="orange">starts</span> and <span className="orange">ends</span> with the letters we give you.
          <br /> There are <span className="orange">5 rounds</span>, <span className="orange">10 seconds</span> each. Make sure you have an answer typed in before time runs out!
          <br /> You'll be awarded points based on the length of your answer.
          <br /> Good luck!</p>
      </div>
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