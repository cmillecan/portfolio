import React from 'react';
import './Layout.css';

function Portfolio() {

    return (
        <div className='portfolio-container'>
            <div className='navbar'>
                <h1>CM</h1>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='main-content'>
                <div className='welcome'>
                    <h1>Constance Millecan</h1>
                    <div className='divider'></div>
                    <p>hyello welcome my site</p>
                </div>
                <div className='projects-content'>
                    <h1>Projects</h1>
                    <div className='projects-display'>
                        <div className='project-item-left'>
                            <div className='project-boxes-fitapp'>
                            </div>
                            <div className='project-description-right'>
                                <h2>FitApp</h2>
                                <h3>web application</h3>
                                <p>FitApp is a web application for logging workouts. I created this project as my final project at Holberton School.</p>
                            </div>
                        </div>
                    </div>

                    <div className='projects-display'>
                        <div className='project-item-left'>
                            <div className='project-boxes'>
                                <div className='project-title'>
                                    <div className='project-btn'>Project 1</div>
                                </div>
                            </div>
                            <div className='project-description-right'>
                                <h2>Project Title</h2>
                                <div className='divider'></div>
                                <p>FitApp is a web application for logging workouts. I created this project as my final project at Holberton School.</p>
                            </div>
                        </div>
                    </div>
                    <div className='projects-display'>
                        <div className='project-item-left'>
                            <div className='project-boxes'>
                                <div className='project-title'>
                                    <div className='project-btn'>Printf</div>
                                </div>
                            </div>
                            <div className='project-description-right'>
                                <h2>Printf</h2>
                                <div className='divider'></div>
                                <p>this is a description of a project and this is how i did my project and this is whatever i'm saying</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-content'>
                    <h1>About</h1>
                    main content
                    <p>hyello welcome to my site</p>
                </div>
                <div className='contact-content'>
                    <h1>Contact</h1>
                    <div className='contact-links'>
                        <a href='http://twitter.com/cmillecan'>Twitter</a> -
                        <a href='http://twitter.com/cmillecan'>Twitter</a> -
                        <a href='http://twitter.com/cmillecan'>Twitter</a>
                    </div>
                </div>
                <div className='footer'>
                    <p>copyright 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio