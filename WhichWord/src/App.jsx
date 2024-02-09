import { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import BaseQuestion from './components/BaseQuestion';
import ScoreScreen from './components/ScoreScreen';

function App() {

  const [view, setView] = useState("MainMenu"); // Dictates what component is rendered
  const [score, setScore] = useState(0);
  const [viewHTML, setViewHTML] = useState(<></>); // What is rendered

  // Everytime {view} changes, html component stored changes
  useEffect(() => {
    if (view === "MainMenu")
      setViewHTML(<MainMenu setView={setView} />);
    else if (view === "BaseQuestion")
      setViewHTML(<BaseQuestion setScore={setScore} view={view} setView={setView} />);
    else
      setViewHTML(<ScoreScreen score={score} setScore={setScore} setView={setView} />);
  }, [view])

  return (
    <>
      {viewHTML}
    </>
  )
}

export default App
