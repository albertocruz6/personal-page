import React from 'react'
import "./Projects.css"
import aonLogo from './aonrobotics.png'
import pesLogo from './peslogo.png'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1 id="projects-tag">Projects and other works:</h1>
            <div className='project-details'>
                <div className='project-spacer'/>
                <div className='project-details-images'>
                    <div className='aon-image'>
                        <a href="http://aonrobotics.com/" id='aon-project-link'>
                            <img src={aonLogo} alt="aon-logo" id='aon-logo' width='300' height='153'/>
                        </a>
                    </div>
                    <div className='pes-image'>
                        <a href="https://luz-verde-frontend.herokuapp.com/about" id='pes-logo-link'>
                            <img src={pesLogo} alt="pes-logo" id='pes-logo' width='300' height='208'/>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects
