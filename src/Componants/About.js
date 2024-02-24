import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import watch from './watch.png';
import '../App.css'


const About = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const imgContainerStyle = {
    maxWidth: '50vw',
    boxShadow: `0px 0px 10px 1px ${mousePosition.x < window.innerWidth / 2 ? 'white' : 'yellow'}`
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (


    <div className='container about'>
      <div className="img-container" align='center'>
        <img src={watch} alt="Stop Watch Face" style={imgContainerStyle} />
      </div>
      <h1>Welcome to <span style={{ color: "yellow", textShadow: '0px 0px 10px red' }}>Stopwatch</span>  </h1 >
      <h3>your simple and efficient tool for timekeeping!</h3>
      <p>Our online stopwatch is designed to be easy to use, with intuitive controls and clear display. Whether you need to time an activity, track your workouts, or manage your tasks, our stopwatch is here to help.</p>
      <p>Key features of Online Stopwatch:</p>
      <ul>
        <li> <p>Start, stop, and reset functionality</p></li>
        <li><p>Accurate timing with milliseconds precision</p></li>
        <li><p>Customizable display options</p></li>
        <li><p>User-friendly interface for seamless experience</p></li>
      </ul>
      <p>Stopwatch is perfect for individuals, athletes, coaches, teachers, and anyone who needs a reliable timer for their activities.
        It's completely free to use and accessible from any device with an internet connection.</p>
      <p>Thank you for choosing Online Stopwatch. If you have any feedback or suggestions, feel free
        to <Link to="mailto:ashishmisal23@gmail.com" target='_blank'>contact us</Link>.</p>
    </div>
  )
}

export default About