import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import { Slider } from './pages/Slider'
import { Section1 } from './pages/Section1'
import { Section2 } from './pages/Section2'
import { Section3 } from './pages/Section3'
import { Section4 } from './pages/Section4'
import { Footer } from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' '>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar></Navbar>
          <div className='max-w-7xl mx-auto'>
            <Slider></Slider>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
          </div>
          <Footer></Footer>
        </>
    }></Route>
    </Routes>
    </div>
  )
}

export default App
