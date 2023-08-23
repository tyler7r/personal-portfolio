import React from 'react'
import { Link } from 'react-router-dom'
import Headshot from './images/trandall_profile.jpg'
import './styles/header.css'

export const Header = (props) => {
    return (
        <div className='header-section'>
            <div className='header-image-container'>
                <img src={Headshot} alt='headshot' className='header-image' />
                <div className='header-name'>Tyler Randall</div>
            </div>
            <div className='header-buttons-container'>
                <Link to='https://github.com/tyler7r'><img className='header-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                <img className='header-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
            </div>
            <div className='header-info'>
                <h2 className='header-title'>About me</h2>
                <p className='header-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

        </div>
    )
}