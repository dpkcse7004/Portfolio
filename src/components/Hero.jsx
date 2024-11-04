import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-box'>
        <div className='hero-inner'>
        <div className='content'>
            <span className="hello">Hello!</span>
            <h1 className="name">I'm</h1>
            <h1 className="name">Deepak</h1>
            <h1 className="name">Kumar</h1>
            <h1 className="field"><span>Java Developer</span></h1>
        </div>
        <div className='pic-container'>
          <img className='pp' src="./image/my-pic.jpg" alt="" />
        </div>
      </div>
        </div>
          
  )
}

export default Hero