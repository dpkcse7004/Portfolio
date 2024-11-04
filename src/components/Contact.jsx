import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
          <div className="contact-title">
            <p>Contact me</p>
          </div>
          <div>
            <center><p id='quote'>Below are the details to reach out to me!</p></center>
          </div>
          <div className="contact-box">
            <div>
            <a href=""><img src="./icons/calla.png" alt="" /></a>
            <h3 className='abc'>Contact</h3>
            </div>
            <div>
            <a href=""><img src="./icons/linkedin.png" alt="" /></a>
            <h3 className='abc'>Linked In</h3>
            </div>
            <div>
            <a href=""><img src="./icons/resumea.png" alt="" /></a>
            <h3 className='abc'>Resume</h3>
            </div>
          </div>
          
    </div>
  )
}

export default Contact