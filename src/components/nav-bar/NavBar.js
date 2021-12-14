import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"
import SideBarToggleButton from '../side-bar/SideBarToggleButton'

const NavBar = ({sideBarClickHandler}) => {

    return (
        <nav className='nav-bar'>
            <div className='nav-bar__toggle-button'>
                <SideBarToggleButton click={sideBarClickHandler}/>
            </div>
            <div className='nav-bar__logo'><Link to="/">Logo</Link></div>
            <div className='spacer'/>
            <div className='nav-bar__items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
