import React, {useEffect, useState} from 'react';
import './LeftSection.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import connie from '../images/pic.png'
import Pill from './Pill';

const LeftSection = () => {
    const linkOffset = -145;

    return (
        <div className="left-container">
            <div className='name-title-container'>
                <div className='pic'>
                    <img src={connie} alt="Constance Millecan" />
                </div>
                <div className='name-title-column'>
                    <h1>Constance Millecan</h1>
                    <h3>Software Engineer</h3>
                </div>
            </div>
            <div className="nav-links">
                <Link
                    activeClass="active"
                    to="about"
                    spy
                    smooth
                    offset={linkOffset}
                    duration={500}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="experience"
                    spy
                    smooth
                    offset={linkOffset}
                    duration={500}
                >
                    Experience
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy
                    smooth
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
            <div className='technologies-container'>
                <h2>Technologies I'm interested in:</h2>
                <div className='technologies'>
                    <Pill><p>JavaScript</p></Pill>
                    <Pill><p>React</p></Pill>
                    <Pill><p>TypeScript</p></Pill>
                    <Pill><p>Node</p></Pill>
                    <Pill><p>CSS</p></Pill>
                    <Pill><p>HTML</p></Pill>
                </div>

            </div>
            <div className="social">
                <a
                    href="https://www.linkedin.com/in/constance-m-8672151a1/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="http://github.com/cmillecan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
            </div>
        </div>
    );
};

export default LeftSection;
