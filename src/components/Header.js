import React,  { useState }  from 'react'
import PropTypes from 'prop-types'
import NavBar from './nav-bar/NavBar'
import SideBar from './side-bar/SideBar'
import Backdrop from './backdrop/Backdrop'


const Header = ({title}) => {

    const[sideDrawOpen, setSideDrawOpen] = useState(false)

    const sideBarToggleClickHandler = () => {
        setSideDrawOpen(!sideDrawOpen)
    };

    const backDropClickHandler = () => {
        setSideDrawOpen(false)
    }

    let backDrop;

    if(sideDrawOpen){
        backDrop = <Backdrop click={backDropClickHandler}/>
    }

    return (
        <header className='header'>
            <NavBar sideBarClickHandler={sideBarToggleClickHandler}/>
            <SideBar show={sideDrawOpen}/>
            {backDrop}
        </header>
    )
}

Header.defaultProps = {
    title: "Alberto Ian Cruz Salaman",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
