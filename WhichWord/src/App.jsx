import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import BaseQuestion from './components/BaseQuestion'

function App() {

  const [view, setView] = useState("MainMenu")

  return (
    <>
      {(view === "MainMenu") ?
        <MainMenu setView={setView} /> :
        <BaseQuestion />
      }
    </>
  )
}

export default App
