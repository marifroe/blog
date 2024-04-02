import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from './components/Overview/Overview'

const TITLE = 'Marilena\'s Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Overview title={TITLE} />
    </>
  )
}

export default App
