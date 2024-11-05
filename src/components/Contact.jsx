import React from 'react'
import './Contact.css'
import Form from './Form';
const Contact = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/deepakkr26", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/who.dpk_/profilecard/?igsh=Nm91eDJubXJjbmZh", "_blank");
  };
  return (
    <div className='contact-container'>
      <div className='contact-form'>
            <Form></Form>
          </div>
          {/* <div className="contact-title">
            <p>Contact me</p>
          </div> */}
           <center>
          <div>
            <center><p id='quote'>Below are the details to reach out to me!</p></center>
          </div>
         
          <div className="contact-box">
            <div className='contact-box-inner'>
            <a href=""><img src="./image/ig.png" alt="" /></a>
            <button className="btn-c" onClick={openInstagram}>Instagram</button>
            </div>
            <div className='contact-box-inner'>
            <a href=""><img src="./icons/linkedin.png" alt="" /></a>
            <button className="btn-c" onClick={openLinkedIn}> LinkedIn</button>
            </div>
            <div className='contact-box-inner'>
            <a href=""><img src="./icons/resumea.png" alt="" /></a>
            <button className="btn-c">Resume</button>
            </div>
          </div>
          </center>
          
          
            
          
    </div>
  )
}

export default Contact