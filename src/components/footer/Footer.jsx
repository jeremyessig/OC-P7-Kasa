import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import footerLogo from './logo.png';

const Footer = () => {

    /**
     * Date dynamique
     */
    const date = new Date();

    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="logo">
                    <Link to='/'>
                    <img src={footerLogo} alt="" />
                    </Link>
                </div>
                <span className="legal">© {date.getFullYear()} Kasa. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;