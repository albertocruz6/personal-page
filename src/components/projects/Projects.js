import React from 'react'
import "./Projects.css"
import pesLogo from './peslogo.png'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1 id="projects-tag">Projects and other works:</h1>
            <div className='project-details'>
                <div className='project-spacer'/>
                <div className='project-details-images'>
                    <div className='pes-image'>
                        <a href="https://luz-verde-project.github.io/Luz-Verde-Frontend/" id='pes-logo-link'>
                            <img src={pesLogo} alt="pes-logo" id='pes-logo' width='300' height='208'/>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects
