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
  const [nickname, setNickname] = useState("");

  const components = {
    MainMenu: () => { return <MainMenu setView={setView} /> },
    Login: () => { return <Login setView={setView} setUserName={setUserName} setNickname={setNickname} setPersonalBest={setPersonalBest} /> },
    CreateAccount: () => { return <CreateAccount setView={setView} setUserName={setUserName} nickname={nickname} setNickname={setNickname} /> },
    StartGame: () => { return <StartGame setView={setView} nickname={nickname} /> },
    BaseQuestion1: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} nickname={nickname} /> },
    BaseQuestion2: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} nickname={nickname} /> },
    BaseQuestion3: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} nickname={nickname} /> },
    BaseQuestion4: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} nickname={nickname} /> },
    BaseQuestion5: () => { return <BaseQuestion score={score} setScore={setScore} view={view} setView={setView} personalBest={personalBest} setPersonalBest={setPersonalBest} nickname={nickname} /> },
    Leaderboard: () => { return <Leaderboard setView={setView} /> },
    ScoreScreen: () => { return <ScoreScreen userName={userName} score={score} setScore={setScore} setView={setView} personalBest={personalBest} /> },
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
