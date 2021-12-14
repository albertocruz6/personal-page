import React from 'react'
import "./SideBar.css"
import {Link} from 'react-router-dom'


const SideBar = ({show}) => {
    let drawerClasses = 'side-bar'
    if(show){
        drawerClasses = 'side-bar open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/personal-page">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default SideBar
