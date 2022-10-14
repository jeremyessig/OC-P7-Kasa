import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav">
            <Link className="nav__brand" to='/'>
                <img src={logo} alt="" />
            </Link>
            <div className="nav__links">
                <Link className="link" to='/'>
                    Accueil
                </Link>
                <Link className="link" to='/about'>
                    A propos
                </Link>
            </div>
        </div>
    </nav>
  )
}
