import React from 'react';
import { Link } from 'react-router-dom';


export const Projects = (props) => {
    return (
        <div className='project-section'>
            <div className="project-cards">
                <div className='project-card' id='main-project'>
                    <div className='project-screenshot'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>The Odinbook</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                        <div className='project-description'></div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-screenshot'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>Shopping Cart</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                        <div className='project-description'></div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-screenshot'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>Memory Card</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                        <div className='project-description'></div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-screenshot'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>Knight Travails</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                        <div className='project-description'></div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-screenshot'>Screenshot</div>
                    <div className="project-info">
                        <div className='project-name'>Todo List / Calculator</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github-icon' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkdin-icon' />
                        <div className='project-description'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}