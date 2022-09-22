import React from 'react'
import Emoji from "../miscelaneous/Emoji"
import styled, {keyframes} from 'styled-components'
import pfp from "./pfp.png"
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
                        <li>From: <b>Puerto Rico</b> <Emoji symbol="0x1F1F5"/><Emoji symbol="0x1F1F7"/></li>
                        <li>Studies in: <b>University of Puerto Rico - Mayaguez Campus</b></li>
                        <ul>
                            <li>Majors in: <b>Computer Science and Engineering (CSE) and Electrical Engineering (EE)</b></li>
                            <li>Year: <b>5th (Senior!)</b> <i>5 year program</i></li>
                        </ul>

                    </ul>
                </div>
                <div className='about-details-images'>
                    <img src={pfp} alt="PFP" id='PFP' width="300" height="168"/>
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
