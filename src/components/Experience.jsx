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
                            Enhanced security by addressing annual pen test concerns through the relocation of session data from local storage to a secure cookie.
                        </p>
                        <p>
                            Key contributor to login flow redesign, enhancing user experience, implementing robust testing strategies, and resolving critical 2FA bugs, resulting in improved user retention and reduced support tickets.
                        </p>
                        <p>
                            Collaborated in the implementation of Single Sign On (SSO), integrated the SSO login API, ensured seamless redirection to the Cognito Hosted UI, and wrote tests to demonstrate end-to-end functionality.
                        </p>
                        <p>
                            Led frontend development for high-impact features within a paid customer tier, delivering a dynamic React dashboard widget and responsive components that empowered customers with more accurate business analytics, driving greater success.
                        </p>
                    </div>
                </div>
        </Section>
    )
}

export default Experience