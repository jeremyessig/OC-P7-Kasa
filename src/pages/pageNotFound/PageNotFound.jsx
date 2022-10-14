import React from 'react';
import { Link } from 'react-router-dom';
import './page_not_found.scss';

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div className="container">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="link">
                <Link to='/'>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;