import React from 'react'
import Emoji from "../miscelaneous/Emoji"
import styled, { keyframes } from 'styled-components'
import pfp from './pfp.png'
import {ReactComponent as ReactLogo} from './uprm_logo.svg'
import './About.css'

const About = () => {

    const dotArray = "...".split("");
    return (
        <div className='about-container'>
            <h1 id='about-tag'>About Alberto<Wrapper>{dotArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}</Wrapper></h1>
            <div className='about-details'>
                <div className='about-details-list'>
                    <ul>
                        <li>Full name: <b>Alberto Ian Cruz Salamán</b></li>
                        <li>From: <b>Puerto Rico</b> <Emoji symbol="0x1F1F5" /><Emoji symbol="0x1F1F7" /></li>
                        <li>Studies in: <b>University of Puerto Rico - Mayagüez Campus</b></li>
                        <ul>
                            <li>Majors in: <b>Computer Science and Engineering (CSE) and Electrical Engineering (EE)</b></li>
                            <li>Year: <b>5th (Senior!)</b> <i>5 year program</i></li>
                        </ul>
                        <li>Interested in: <b>Robotics and Automated Control Systems</b></li>
                    </ul>
                </div>
                <div className='about-details-images' id='PFP_image'>
                    <img src={pfp} alt="PFP" id='PFP'  />
                </div>
            </div>
            <div className='about-details'>
                <div id='MS_image' className='about-details-images'>
                    <iframe title='MS GIF' src="https://giphy.com/embed/l41YcLtmnhYyUlbfq" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='about-details-list' id='about-list-experience'>
                    <ul>
                        <li>Experience: </li>
                        <ul>
                            <li><b>Microsoft SWE Internship</b> 
                                <ul>
                                    <li><i>May 2022 - August 2022</i></li>
                                    <li>Implement a dashboard that, by using the Dataverse API, could query the internal development databases and display charts related to performance diagnostics for organizations, applications, and individual users.  </li>
                                </ul>
                            </li>
                            <li><b>Microsoft Explore Internship</b>
                                <ul>
                                    <li> <i>June 2021 - August 2021</i></li>
                                    <li>Implement a performance profiling tool into the Dataverse API and make a diagnostic profile that can display execution times of all the subprocesses, plugins libraries and queries to retrieve data. Exposure of the results made available through a custom REST endpoint and visualization achieved utilizing the Speed Scope open-source project. </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='about-details'>
                <div className='about-details-list'>
                    <ul>
                        <li><b>University of Puerto Rico Mayagüez Campus IEEE PES: Luz Verde Project</b> 
                            <ul>
                                <li><i>May 2021 - Present</i></li>
                                <li>Web development. Implementation of React front-end to display results of electric controller for solar power grid output information. Data upload using remote database and retrieval utilizing a REST endpoint developed in Flask. </li>
                            </ul>
                        </li>
                        <li><b>University of Puerto Rico Mayagüez Campus: Computer Architecture Course Assistantship</b>
                            <ul>
                                <li><i>February 2022 - May 2022</i></li>
                                <li>Correct tests and assignments and help with the class material alongside Dr. José Navarro</li>
                            </ul>
                        </li>
                        <li><b>University of Puerto Rico Mayagüez Campus: ML/AI Malware Patterns Research</b>
                            <ul>
                                <li><i>May 2021 - May 2022</i></li>
                                <li>Implementing supervised ML/AI algorithms to recognize malware patterns in distributed code</li>
                                <li>Evaluate and improve current ML/AI algorithms with prospects of implementing unsupervised/neural networks under the mentorship of Dr. Nayda Santiago. </li>
                            </ul>
                        </li>
                        <li><b>University of Puerto Rico Mayagüez Campus: Data Structures Course Teacher Assistantship</b>
                            <ul>
                                <li><i>January 2020 - June 2020</i></li>
                                <li>Explain, design, and send lab tasks and expectations to students after being approved by Dr. Juan O. Lopez. Monitor tests, give tutoring and reinforce student’s skills during office hours and class hours and correct assignments with appropriate feedback.  </li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
                <div className='about-details-images' id='UPRM_image'>
                    <ReactLogo width="100%"/>
                </div>
            </div>


        </div>
    )
}
const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px); color: red}
    25% {opacity: 1;transform: translateY(0px); }
    75% {opacity: 1;transform: translateY(0px);}
    100% {opacity: 0;transform: translateY(-100px);}

`
const Wrapper = styled.span`
    display: inline-block;
    z-index: 0;
    span {
        display: inline-block;
        opacity:0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: fowards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    span:nth-child(1) {
        animation-delay: 0.3s;
    }
    span:nth-child(2) {
        animation-delay: 0.7s;
    }
    span:nth-child(3) {
        animation-delay: 1.1s;
    }
    `


export default About
