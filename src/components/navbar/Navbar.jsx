import React from 'react'
import {NavLink } from 'react-router-dom';
import logo from './logo.png'
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav">
            <NavLink className="nav__brand" to='/'>
                <img src={logo} alt="" />
            </NavLink>
            <div className="nav__links">
                <NavLink to='/' className={(nav) => (nav.isActive ? "--active" : "")} end>
                    Accueil
                </NavLink>
                <NavLink to='/about' className={(nav) => (nav.isActive ? "--active" : "")}>
                    A propos
                </NavLink>
            </div>
        </div>
    </nav>
  )
}
