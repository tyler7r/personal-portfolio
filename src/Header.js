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
                    Hi! I am a developer from Atlanta, Georgia who is passionate about building sites with simple solutions and in-depth, user-friendly UI. I recently completed The Odin Project and I wanted to share some of the work that I have completed for it. Most of my work is done with a combination of HTML, CSS, Javascript, React, Node, Express and MongoDB.
                </p>
            </div>

        </div>
    )
}