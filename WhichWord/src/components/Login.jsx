import { useState } from "react";
import './CreateAccount.css';

const Login = ({ setUserName, setView, setPersonalBest }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectName, setIncorrectName] = useState("");

  async function handleOnClick() {
    const body = {
      user_name: name,
      password: password
    };

    try {
      // const result = await fetch("https://wichword-backend.onrender.com/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });
      // const parsedResult = await result.json();
      // console.log("RESULT: ", parsedResult);
      // const data = await fetch("https://wichword-backend.onrender.com/highscore/user");
      // const parsedData = await data.json();
      // const highScore = parseInt(parsedData["highscore"]);
      // setPersonalBest(highScore);

      setUserName(name);
      setIncorrectName("");
      setView("StartGame")
    } catch {
      setIncorrectName("Incorrect name or password")
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="white">Login</h2>
      </div>

      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleOnClick}>Login</button>
      </div>
      <p>{incorrectName}</p>
      <div className="submit-container">
        <button className="submit" onClick={(e) => { setView("MainMenu") }}>Back</button>
      </div>
    </>
  );
}

export default Login;