import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const FooterStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px 0px',
    textAlign: 'center'
  }

  return (
    <footer style={FooterStyle}>
      <p>&copy; 2024 Stopwatch. All rights reserved.</p>
      <p>Made with by ❤️: <Link to="https://github.com/ashishmisal23" style={{ color: "white" }}>Ashish Misal</Link ></p>
    </footer>
  )
}

export default Footer