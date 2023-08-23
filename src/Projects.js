import React from 'react';
import { Link } from 'react-router-dom';
import OpenProjectIcon from './images/open-project.svg'
import OdinbookImage from './images/odinbook-screenshot.jpg'
import ShoppingCartImage from './images/shopping-cart.jpg'
import KnightTravailsImage from './images/knight-travails.jpg'
import CalculatorImage from './images/calculator.jpg'
import MemoryCardImage from './images/memory-card.jpg'
import WaldoImage from './images/waldo.jpg'
import './styles/projects.css'


export const Projects = (props) => {
    return (
        <div className='project-section'>
            <div className='project-section-title'>My Work</div>
            <div className="project-cards">
                <div className='project-card' id='main-project'>
                    <div className='project-preview-container'><img src={OdinbookImage} alt='odinbook-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>The Odinbook</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-odin-book'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://top-odinbook.netlify.app/odinbook/login'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>The Odinbook is a social media app modeled after Facebook. This project is my first fully built out MERN-stack application. Post your thoughts and photos, edit your profile and send out friend requests to other users. The site uses two front-end clients (one for users and one for guests) in order to give those who don't want to signup a chance to interact with the site as well.</p>
                        <p className='skills-used'>Skills Used: JS, React, MongoDB, Express, Node.js</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={WaldoImage} className='project-preview' alt='waldo-game-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Where's Waldo Game</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-photo-tagging'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://top-photo-tagging.netlify.app/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>My take on a the classic Where's Waldo game. Compete against others in a race to find Waldo, Odlaw and the Wizard on a couple of the famous maps. This project was my first full-stack application. The leaderboards update after each round and the withstand due to their link with the firebase database.</p>
                        <p className='skills-used'>Skills used: HTML, CSS, JS, React, React Router, Firebase</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={ShoppingCartImage} alt='shopping-cart-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Shopping Cart</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-shopping-cart/tree/tyler7r-patch-1'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://tyler7r.github.io/TOP-shopping-cart/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>As a member of the professional Ultimate Frisbee team, the Atlanta Hustle. I thought it would be fun to combine my passions and recreate our team's store and add them to your cart. You can scroll through popular tickets and gear to see what might be of interest. This project expanded my knowledge on React by introducing me to its router system. (Let me know if you can find the easter eggs that I added.)</p>
                        <p className='skills-used'>Skills used: HTML, CSS, JS, React, React Router</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={MemoryCardImage} className='project-preview' alt='memory-card-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Survivor Memory</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-memory-card'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://top-memory-card.netlify.app/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>The Survivor Memory game puts your knowledge of Survivor 44 Cast members to the test. In my first major project using React and focusing on object-oriented-programming the user must click on each cast member without repeating. The trick is that the cast members move after each click. Choose your level and test your knowledge!</p>
                        <p className='skills-used'>Skills used: HTML, CSS, Javascript, React</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={KnightTravailsImage} alt='knight-travails-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Knight Travails</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-knight-travails'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://tyler7r.github.io/TOP-knight-travails/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>The Knight Travails forges a path from any chess square to any other square in as few moves as possible. This project was a test of my abilities to use recursive functions.</p>
                        <p className='skills-used'>Skills used: HTML, CSS, Javascript</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={CalculatorImage} alt='calculator-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Calculator</div>
                        <div className="project-btns-container">
                            <Link to='https://github.com/tyler7r/TOP-calculator'><img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' /></Link>
                            <Link to='https://tyler7r.github.io/TOP-calculator/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                        </div>
                        <p className='project-description'>This is the first project that I was proud enough to host to GitHub Pages. Modeled after the calculator that you see on iOS, this project laid the foundation for my knowledge of Javascript.</p>
                        <p className='skills-used'>Skills used: HTML, CSS, Javascript</p>
                    </div>
                </div>
            </div>
        </div>
    )
}