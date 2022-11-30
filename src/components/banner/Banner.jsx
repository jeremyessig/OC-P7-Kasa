import React from 'react';
import './banner.scss';

const Banner = ({title, cover}) => {
    return (
        <div className='banner'>
            <div className="banner__title">
               {title}
            </div>
            <div className="banner__cover">
                <img className='img' src={cover} alt="" />
            </div>
        </div>
    );
};

export default Banner;