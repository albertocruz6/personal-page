import React from 'react'
import styled, {keyframes} from 'styled-components'
import "./Home.css"

const Home = () => {

    const WelcomeArray = "Welcome!".split("")

    return (
        <div className='home-container'>
            <h1 id='welcome-tag'><Wrapper>{WelcomeArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}</Wrapper></h1>
            <div className='home-body'>
                <p>A page made with react-native. Just to prove I can make websites...</p>
            </div>
        </div>
    )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(20deg);}
    25% {opacity: 1;transform: translateY(0px) skewY(0deg);}
    75% {opacity: 1;transform: translateY(0px) skewY(0deg);}
    100% {opacity: 0;transform: translateY(-100px) skewY(10deg);}

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
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.3s;
    }
    span:nth-child(4) {
        animation-delay: 0.4s;
    }
    span:nth-child(5) {
        animation-delay: 0.5s;
    }
    span:nth-child(6) {
        animation-delay: 0.6s;
    }
    span:nth-child(7) {
        animation-delay: 0.7s;
    }
    span:nth-child(8) {
        animation-delay: 0.8s;
    }
`

export default Home
