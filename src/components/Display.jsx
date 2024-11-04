import React from 'react'
import './Display.css'
import Hero from './Hero'
import Contact from './Contact'
import Details from './Details'
const Display = () => {
  return (
    <>
    <div className="full-box">
     <Hero></Hero>
      <center>
      <div className="details">
        <center><Details></Details></center>
      </div>
      </center>
      <center>
      <div className="contact-menu">
        <center><Contact></Contact></center>
      </div>
      </center>
     
      </div>
    </>
  )
}

export default Display