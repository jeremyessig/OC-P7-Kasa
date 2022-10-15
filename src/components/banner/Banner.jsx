import React from 'react';
import './banner.scss';

const Banner = ({banner}) => {
    return (
        <div className='banner'>
            <div className="banner__title">
                {banner.title}
            </div>
            <div className="banner__cover">
                <img className='img' src={banner.cover} alt="" />
            </div>
            <div className="banner__overlay"></div>
        </div>
    );
};

export default Banner;