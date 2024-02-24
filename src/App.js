import React, { useEffect } from 'react'
import Header from './Componants/Header'
import Stopwatch from './Componants/Stopwatch'
import Footer from './Componants/Footer'
import About from './Componants/About'
import Error from './Componants/Error'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Router >
      <Header />
      <Routes>
        <Route exact path='/' element={<Stopwatch />} />
        <Route exact path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>


      <Footer />

    </Router >

  )
}

export default App