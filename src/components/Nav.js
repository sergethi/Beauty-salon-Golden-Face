import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

// const navStyle = {
//   color:'lightgray'
// };

  return (
    <nav>
      <h3>Golden-Face</h3>
      <ul className='nav-links'>
      <Link to="/Home">
        <li>Home</li>
      </Link>
      <Link  to="/About">
        <li>About</li>
      </Link>
      <Link  to="/Services">
        <li>Services</li>
      </Link>
      <Link  to="/Contact">
        <li>Contact</li>
      </Link>
      </ul>
    </nav>
  )
}

export default Nav
