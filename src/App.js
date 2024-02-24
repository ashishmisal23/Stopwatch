import React from 'react'
import Header from './Componants/Header'
import Stopwatch from './Componants/Stopwatch'
import Footer from './Componants/Footer'
import About from './Componants/About'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router >
      <Header />
      <Routes>
        <Route exact path='/' element={<Stopwatch />} />
        <Route exact path='/about' element={<About />} />
      </Routes>


      <Footer />

    </Router >

  )
}

export default App