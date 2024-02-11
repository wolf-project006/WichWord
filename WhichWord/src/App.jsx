import React, { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import BaseQuestion from './components/BaseQuestion';
import ScoreScreen from './components/ScoreScreen';

function App() {

  const [view, setView] = useState("MainMenu"); // Dictates what component is rendered
  const [viewHTML, setViewHTML] = useState(<></>); // What is rendered

  const [score, setScore] = useState(0);
  // const [username, setUsername] = useState("");
  //const [personalBest, setPersonalBest] = useState(0);

  // Fetching user data --> move to after login/create account screen
  // useEffect(() => {
  //   const getPersonalBest = await fetch("/highscore/username");
  //   setPersonalBest(getPersonalBest);
  // }, [])

  const components = {
    MainMenu: () => { return <MainMenu setView={setView} /> },
    BaseQuestion1: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} /> },
    BaseQuestion2: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} /> },
    BaseQuestion3: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} /> },
    BaseQuestion4: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} /> },
    BaseQuestion5: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} /> },
    ScoreScreen: () => { return <ScoreScreen score={score} setScore={setScore} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
  }
  // Everytime {view} changes, html component stored changes
  useEffect(() => {
    setViewHTML(components[view]());
  }, [view])

  return (
    <>
      {viewHTML}
    </>
  )
}

export default App
