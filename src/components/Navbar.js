import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav_item'><Link to='/'>Home</Link></div>
            <div className='nav_item'><Link to='/about'>About</Link></div>
            <div className='nav_item'><Link to='/contact'>Contact</Link></div>
        </nav>
    )
}

export default Navbar