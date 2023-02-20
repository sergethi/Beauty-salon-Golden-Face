import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

function Nav() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <nav>
      <Link to="/Home">
        <h3>Golden-Face</h3>
      </Link>
      

      <CSSTransition
           in={!isSmallScreen || isNavVisible}
           timeout={350}
           classNames="NavAnimation"
           unmountOnExit
          >

      <ul className='nav-links'>
      <Link to="/Home">
        <li onClick = {toggleNav}>Home</li>
      </Link>
      <Link  to="/About">
        <li onClick = {toggleNav}>About</li>
      </Link>
      <Link  to="/Services">
        <li onClick = {toggleNav}>Services</li>
      </Link>
      <Link  to="/Contact">
        <li onClick = {toggleNav}>Contact</li>
      </Link>
      </ul>
      </CSSTransition>
      <div  className = "burger-icon" onClick = {toggleNav}>
      <img src="/iconfinder_Burger_Menu.png" width="24" height="24" alt="Phone"/>
      </div>
    </nav>
  )
}

export default Nav
