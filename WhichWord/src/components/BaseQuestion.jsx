import React, { useEffect, useState } from "react";
import '../App.css';

const BaseQuestion = () => {

  const [answer, setAnswer] = useState("");
  const [heandAndTail, setHeadAndTail] = useState([]);

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    const head = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const tail = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const newArr = [head, tail];

    setHeadAndTail(newArr);
  }, []);

  function handleOnClick() {

  }

  return (
    <>
      <div>
        <h1 className="letter">{heandAndTail[0]}</h1>
        <input type="text" onChange={e => setAnswer(e.target.value)} />
        <h1 className="letter">{heandAndTail[1]}</h1>
      </div>
      <button onClick={handleOnClick} value={answer} >Submit</button>
    </>
  );
}

export default BaseQuestion;