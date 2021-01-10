import React from 'react';
import './Layout.css';
import SmoothScroll from './Smoothscroll'

function Portfolio() {

    return (
        <div className='portfolio-container'>
            <nav className='navbar'>
                <div className='logo'>CM</div>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className='main-content'>
                <div className='welcome'>
                    <a id="about"><h1>Constance Millecan</h1></a>
                    <h5>software engineer</h5>
                    <div className='about'>
                        <div className='about-left'>
                            <img className="about-pic" src="https://i.imgur.com/DOrIxZr.jpg" alt="fitapp" />
                        </div>
                        <div className='about-right'>
                            <p>Hi! I am a _____ and I am passionate about creativity. I have been studying _____ for the past _____ years. I had my first experience with web design over 15 years ago
                                in high school when I had a web site and would spend hours designing and making little adjustments and I loved it. Although my professional background is in music, my interest in software never went away.
                                I always had the desire to learn more and discover all the amazing things I can create. There is something about both music and software that brings me into a fascinating world.
                                I am very excited to explore more in the field of software engineering.</p>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <a id="projects"><h1>Projects</h1></a>
                    <div className='projects-content'>
                        <div className='projects-display'>
                            <div className='complete-project'>
                                <div className='project-row'>
                                    <div className='project-top'>
                                        <div className='project-name'>
                                            <h2>FitApp</h2>
                                        </div>
                                        <div className='project-h3'>
                                            <h3>web application</h3>
                                        </div>
                                    </div>
                                    <div className='project-bottom'>
                                        <h4>November 2020</h4>
                                        <img src="https://i.imgur.com/d24RntH.png" width="350" alt="fitapp" />
                                        <p>FitApp is a web application for logging workouts. I created this project as my final project at Holberton School. sldkfj sdlkfjd lskfj sdkfjs skfjls dkjf skdj s f.
                                            FitApp is a web application for logging workouts. I created this project as my final project at Holberton School. FitApp is a web application for logging workouts.</p>
                                        <div className='project-3'>
                                            <a href="http://github.com/cmillecan/fitapp">Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='projects-display'>
                            <div className='complete-project'>
                                <div className='project-row'>
                                    <div className='project-top'>
                                        <div className='project-name'>
                                            <h2>Simple Shell</h2>
                                        </div>
                                        <div className='project-h3'>
                                            <h3>linux and unix system programming</h3>
                                        </div>
                                    </div>
                                    <div className='project-bottom'>
                                        <h4>May 2020</h4>
                                        <p>FitApp is a web application for logging workouts. I created this project as my final project at Holberton School. sldkfj sdlkfjd lskfj sdkfjs skfjls dkjf skdj s f.
                                            FitApp is a web application for logorkouts.</p>
                                        <p>Github</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className='projects-display'>
                                <div className='complete-project'>
                                    <div className='project-row'>
                                        <div className='project-top'>
                                            <div className='project-name'>
                                                <h2>Printf</h2>
                                            </div>
                                            <div className='project-h3'>
                                                <h3>low-level programming</h3>
                                            </div>
                                        </div>
                                        <div className='project-bottom'>
                                            <h4>March 2020</h4>
                                            <p>ct as my final project at Holberton School. sldkfj sdlkfjd lskfj dkfjs skfjls dkjf skdj s f.
                                                FitApp is a web application for logging workouts. I created this project as my final project at Holberton School. FitApp is a web application for logging workouts.</p>
                                            <p>Github</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-content'>
                    <a id="contact"><h1>Contact</h1></a>

                    <div className='contact-links'>
                        <a href='http://twitter.com/cmillecan'>LinkedIn</a> -
                        <a href='http://twitter.com/cmillecan'>Twitter</a> -
                        <a href='http://twitter.com/cmillecan'>Twitter</a>
                    </div>
                </div>
                <div className='footer'>
                    <p>copyright 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio