import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='p-2xl text-green-600 m-3xl textsize-4xl'>Welcome to Vite</h1>
    </>
  )
}

export default App
