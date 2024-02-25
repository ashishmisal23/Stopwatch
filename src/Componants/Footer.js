import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer>
      <p>&copy; 2024 Stopwatch. All rights reserved.</p>
      <p>Made with ❤️ by : <Link to="https://github.com/ashishmisal23" target='_blank' style={{ color: "#ffffff9f" }}>Ashish Misal</Link >
      </p>
    </footer>
  )
}

export default Footer