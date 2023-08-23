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
                        <p className='project-description'>This is the description</p>
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
                        <div className='project-description'>This is the description</div>
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
                        <div className='project-description'>This is the description</div>
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
                        <div className='project-description'>This is the description</div>
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
                        <div className='project-description'>This is the description</div>
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
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
            </div>
        </div>
    )
}