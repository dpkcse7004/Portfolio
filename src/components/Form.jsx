import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import './Form.css'
export default function Form() {
    return (
<div className='contact-us-outer'>
    <center> <div className='contact-us-heading'>
        <p>Contact us</p>
        </div></center>
       
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
          
            <div className='pair'>
                <p>Name:</p>
                <MDBInput type='name' wrapperClass='mb-4' placeholder='Enter your name here..'/>
            </div>
            <div className='pair'>
                <p>Email:</p>
                <MDBInput type='email' v-model='email' wrapperClass='mb-4' placeholder='Enter your email-id here...' />
            </div>
            <div className='pair'>
                <p>Subject:</p>
                <MDBInput  v-model='subject' wrapperClass='mb-4' placeholder='Write subject here...' />
            </div>
            <div className='pair'>
                <p>Message</p>
                <MDBTextArea wrapperClass='mb-4'  placeholder='Enter message here....' />
            </div>
            <div className='send-part'>
            <MDBCheckbox wrapperClass='' label='Send me copy' />
            <MDBBtn color='primary' block className='send-btn my-2'>
                <p className='send'>Send</p>
            </MDBBtn>
            </div>
            
        </form>
        </div>
    );
}