import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import { Slider } from './pages/Slider'
import { Section1 } from './pages/Section1'
import { Section2 } from './pages/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar></Navbar>
          <Slider></Slider>
          <Section1></Section1>
          <Section2></Section2>
        </>
    }></Route>
    </Routes>
    </div>
  )
}

export default App
