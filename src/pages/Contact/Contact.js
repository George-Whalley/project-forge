// Standard
import React from 'react'
// Link to stylesheet
import './Contact.css';
// Fetch Font awesomes required from libaray
import { FaEnvelope } from 'react-icons/fa';

function Contact(){
    return(
        <div className='container-page contact'>
            <div className='contact-me card'>
            <div className='card-header'>
                    <div className="email-icon">
                        <FaEnvelope />
                    </div>
                </div>
                <div className="main-container contact">
                    <p>Contact Me!</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;