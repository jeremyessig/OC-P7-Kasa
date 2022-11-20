import React from 'react';
import './banner.scss';

const Banner = ({banner}) => {
    return (
        <div className='banner'>
            <div className="banner__title">
                <h4>{banner.title} </h4>
            </div>
            <div className="banner__cover">
                <img className='img' src={banner.cover} alt="" />
            </div>
        </div>
    );
};

export default Banner;