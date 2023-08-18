import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from './images/phone.svg'
import EmailIcon from './images/email.svg'

export const Contact = (props) => {
    return (
        <div className="contact-section">
            <div className='contact-container'>
                <h3 id='contact-title'>
                    Contact me
                </h3>
                <div id='contact-me-msg'>
                    Please get in touch with me if you think our work could be mutually beneficial!
                </div>
                <div className='address-container'>
                    <div id="street-address">543 Boulevard SE, Apt. 3</div>
                    <div id='city-address'>Atlanta, GA 30312</div>
                </div>
                <div className='phone-container'>
                    <img src={PhoneIcon} alt='phone-icon' />
                    <div id='phone-number'>404-984-7244</div>
                </div>
                <div className='email-container'>
                    <img src={EmailIcon} alt='email-icon' />
                    <div id='email-address'>tyler7r@gmail.com</div>
                </div>
                <div className='other-contact-container'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                </div>
            </div>
            <div id='contact-image'>Placeholder</div>
        </div>
    )
}