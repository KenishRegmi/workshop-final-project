import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="nav-main">
    <div className="navbar">
        <h2 className="nav-logo">
            Learn With Fun
        </h2>
        <ul className="nav-items">
            <li><Link to={'./'}><a href="">Home</a></Link></li>
            <li><Link to = {'/games'}><a href="">Games</a></Link></li>
            <li><Link to={'/quizes'}><a href="">Quizes</a></Link></li>
            <li><Link to={'/aboutus'}><a href="">About us</a></Link></li>
            <li><Link to ={'/contact'}><a href="">Contact</a></Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
