import React from 'react'
import './menu.css'
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (    
    <div>
    <nav className="menu">
    <div>
    <ul className="menu-links">
      <li className="nav_title"><a href="#about">ABOUT </a></li>
      <li className="nav_title"><a href="#rooms_&_suites">ROOMS & SUITES</a></li>
      <li className="nav_title"><a href="#dining">DINING</a></li>
      <li className="nav_title"><a href="#experience">EXPERIENCE</a></li>
      <li className="nav_title"><a href="#events">EVENTS</a></li>
      <li className="nav_title"><a href="#gallery">GALLERY</a></li>
      <li className="nav_title"><a href="#offers">OFFERS</a></li>
      <li className="nav_title"><a href="#more">MORE</a></li>
    </ul>
    </div>
    <div className="menu-find">
      <a href="#find_a_hotel" className="nav_button">FIND A HOTEL</a>
      <div />
    </div>
    <div className="menu-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className="menu-smallscreen_overlay flex__center slide-bottom">
          <FaTimes fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="menu-smallscreen_links">
            <li><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
            <li ><a href="#rooms_&_suites"  onClick={() => setToggleMenu(false)}>ROOMS & SUITES</a></li>
            <li ><a href="#dining"  onClick={() => setToggleMenu(false)}>DINING</a></li>
            <li ><a href="#experience"  onClick={() => setToggleMenu(false)}>EXPERIENCE</a></li>
            <li ><a href="#events"  onClick={() => setToggleMenu(false)}>EVENTS</a></li>
            <li ><a href="#gallery"  onClick={() => setToggleMenu(false)}>GALLERY</a></li>
            <li ><a href="#offers"  onClick={() => setToggleMenu(false)}>OFFERS</a></li>
            <li ><a href="#more"  onClick={() => setToggleMenu(false)}>MORE</a></li>
            <li ><a href="#find_a_hotel"  onClick={() => setToggleMenu(false)}>FIND A HOTEL</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
  </div>
  )
}

export default Menu