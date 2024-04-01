import React from "react";
import "./Experience.css"
import Section from "./Section";
const Experience = () => {
    return (
        <Section id="experience">
            <div className="experience-content">
                <span className='experience-header'><h5>Experience</h5></span>
                <div className="job-title">
                    <h2>Software Engineer · VidMob, Inc</h2>
                    <span className='date'><h4>Oct 2021 - Sept 2023</h4></span>
                </div>
                    <div>
                        <p>
                            - Played a critical role in redesigning the login flow and resolving two-factor authentication (2FA) bugs. This improvement led to a noticeable reduction in support tickets related to login issues, ensuring a smoother authentication process for users.
                        </p>
                        <p>
                            - Collaborated on the implementation and integration of Single Sign-On (SSO), improving system security and simplifying the login process. Developed end-to-end tests for dependable user authentication.
                        </p>
                        <p>
                            - Resolved annual penetration test vulnerabilities by moving session data to secure cookies, greatly enhancing data security.
                        </p>
                        <p>
                            - Took charge of developing premium tier features, including a React dashboard widget, leading to better customer use of business analytics.
                        </p>
                    </div>
                </div>
        </Section>
    )
}

export default Experience