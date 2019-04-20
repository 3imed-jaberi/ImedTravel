import React from 'react';
import { Link } from 'react-router-dom';

import SideNav from './private/SideNav';

const Navbar = () => {
    return (
    <div>
  <div className="navbar-fixed">
    <nav className="teal">
      <div className="container">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/"> ImedTravel </Link>
          <Link to="/" data-target="mobile-nav" className="sidenav-trigger" > </Link>
          <ul className="right hide-on-med-and-down">
            <li>
            <Link className="waves-light" to="/"> Home </Link>
            </li>
            <li>
            <Link className="waves-light" to="/search"> Search </Link>
            </li>
            <li>
            <Link className="waves-light" to="/gallery"> Gallery </Link>
            </li>
            <li>
            <Link className="waves-light" to="/contact-us"> Contact </Link>
            </li>
            <li>
            <Link className="waves-light" to="/about-creator"> About Creator </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
      <SideNav />
  </div>
  )
}

export default Navbar ; 
