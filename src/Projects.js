import React from 'react';
import { Link } from 'react-router-dom';
import OpenProjectIcon from './images/open-project.svg'
import OdinbookImage from './images/odinbook-screenshot.jpg'
import ShoppingCartImage from './images/shopping-cart.jpg'
import KnightTravailsImage from './images/knight-travails.jpg'
import CalculatorImage from './images/calculator.jpg'
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
                            <img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                            <img className='project-btn' src={OpenProjectIcon} alt='open-project' />
                        </div>
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={ShoppingCartImage} alt='shopping-cart-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Shopping Cart</div>
                        <div className="project-btns-container">
                            <img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                            <img className='project-btn' src={OpenProjectIcon} alt='open-project' />
                        </div>
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>Memory Card</div>
                        <div className="project-btns-container">
                            <img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                            <img className='project-btn' src={OpenProjectIcon} alt='open-project' />
                        </div>
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={KnightTravailsImage} alt='knight-travails-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Knight Travails</div>
                        <div className="project-btns-container">
                            <img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                            <img className='project-btn' src={OpenProjectIcon} alt='open-project' />
                        </div>
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-preview-container'><img src={CalculatorImage} alt='calculator-preview' className='project-preview' /></div>
                    <div className="project-info">
                        <div className='project-name'>Todo List / Calculator</div>
                        <div className="project-btns-container">
                            <img className='project-btn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                            <img className='project-btn' src={OpenProjectIcon} alt='open-project' />
                        </div>
                        <div className='project-description'>This is the description</div>
                    </div>
                </div>
            </div>
        </div>
    )
}