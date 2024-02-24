import React from 'react'
import { Link } from 'react-router-dom';
import watch from './watch.png';
import '../App.css'

const About = () => {


  return (


    <div className='container about'>
      <img src={watch} alt="Stop Watch Face" />
      <h3>Welcome to Stopwatch, <br />your simple and efficient tool for timekeeping!</h3>
      <p>Our online stopwatch is designed to be easy to use, with intuitive controls and clear display. Whether you need to time an activity, track your workouts, or manage your tasks, our stopwatch is here to help.</p>
      <p>Key features of Online Stopwatch:</p>
      <ul>
        <li>Start, stop, and reset functionality</li>
        <li>Accurate timing with milliseconds precision</li>
        <li>Customizable display options</li>
        <li>User-friendly interface for seamless experience</li>
      </ul>
      <p>Stopwatch is perfect for individuals, athletes, coaches, teachers, and anyone who needs a reliable timer for their activities.
        It's completely free to use and accessible from any device with an internet connection.</p>
      <p>Thank you for choosing Online Stopwatch. If you have any feedback or suggestions, feel free to <Link to="mailto:ashishmisal23@gmail.com">contact us</Link>.</p>
    </div>
  )
}

export default About