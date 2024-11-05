import React from 'react'
import './About.css'
import Details from './Details'

const About = () => {
  return (
    <div className='about-box'>
      <div className='about-outer'>
      {/* <center> */}
      <div className="container-fluid about-box-inner">
        <div className="row">
        <div className='col-6 pic-box my-4'>
        <img className= 'pic' src="./image/my-pic.jpg" alt="" />
        </div>
        <div className="col-6">
          <Details></Details>
        </div>
        </div>
      </div>
      {/* </center> */}
     
      </div>
     
      </div>

  )
}

export default About