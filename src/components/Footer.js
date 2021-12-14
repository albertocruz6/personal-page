import React from 'react'
import { Link, useLocation} from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    return (
        <div>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link> 
            <div/>
            {location.pathname !== '/' &&  <Link to='/'>Go Back</Link>}

        </div>
    )
}

export default Footer
