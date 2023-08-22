import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from './images/phone.svg'
import EmailIcon from './images/email.svg'
import ProfilePic from './images/trandall_profile.jpg'
import './styles/contact.css'

export const Contact = (props) => {
    return (
        <div className="contact-section">
            <h3 id='contact-title'>Contact me</h3>
            <div className='contact-container'>
                <div id='contact-me-msg'>
                    Please get in touch with me if you think our work could be mutually beneficial!
                </div>
                <div className='address-container'>
                    <div id="street-address">543 Boulevard SE, Apt. 3</div>
                    <div id='city-address'>Atlanta, GA 30312</div>
                </div>
                <div className='phone-container'>
                    <img src={PhoneIcon} alt='phone-icon' className='phone-icon' />
                    <a href='tel:4049847244' id='phone-number'>404-984-7244</a>
                </div>
                <div className='email-container'>
                    <img src={EmailIcon} alt='email-icon' className='email-icon' />
                    <a href='mailto:tyler7r@gmail.com' id='email-address'>tyler7r@gmail.com</a>
                </div>
                <div className='other-contact-container'>
                    <Link to='https://github.com/tyler7r'><img className='contact-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                    <img className='contact-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                </div>
            </div>
            <img src={ProfilePic} alt='profile' className='contact-image' />
        </div>
    )
}