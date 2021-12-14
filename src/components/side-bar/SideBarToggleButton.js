import React from 'react'
import './SideBarToggleButton.css'

const SideBarToggleButton = ({click}) => {
    return (
        <button className='toggle-button' onClick={click}>
            <div className='toggle-button__line'/>
            <div className='toggle-button__line'/>
            <div className='toggle-button__line'/>
        </button>
    )
}

export default SideBarToggleButton
