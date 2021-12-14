import React,  { useState }  from 'react'
import NavBar from './nav-bar/NavBar'
import SideBar from './side-bar/SideBar'
import Backdrop from './backdrop/Backdrop'


const Header = () => {

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
export default Header
