import React, { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import CreateAccount from './components/CreateAccount';
import BaseQuestion from './components/BaseQuestion';
import ScoreScreen from './components/ScoreScreen';
import Leaderboard from './components/Leaderboard';
import StartGame from './components/StartGame';
import Login from './components/Login';

function App() {

  const [view, setView] = useState("MainMenu"); // Dictates what component is rendered
  const [viewHTML, setViewHTML] = useState(<></>); // What is rendered

  const [score, setScore] = useState(0);
  const [personalBest, setPersonalBest] = useState(0);
  const [userName, setUserName] = useState("");

  const components = {
    MainMenu: () => { return <MainMenu setView={setView} /> },
    Login: () => { return <Login setView={setView} setUserName={setUserName} setPersonalBest={setPersonalBest} /> },
    CreateAccount: () => { return <CreateAccount setView={setView} setUserName={setUserName} /> },
    StartGame: () => { return <StartGame setView={setView} /> },
    BaseQuestion1: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
    BaseQuestion2: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
    BaseQuestion3: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
    BaseQuestion4: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
    BaseQuestion5: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} /> },
    Leaderboard: () => { return <Leaderboard setView={setView} /> },
    ScoreScreen: () => { return <ScoreScreen score={score} setScore={setScore} setView={setView} personalBest={personalBest} /> },
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
