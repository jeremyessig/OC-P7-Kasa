import React from 'react';
import Banner from '../../components/banner/Banner';
import Posts from '../../components/posts/Posts';
import BannerCover from './banner.png';
import './homepage.scss';


const Homepage = () => {

    return (
        <div className='homepage'>
            <Banner title={<h4><span>Chez vous, </span>partout et ailleurs</h4>} cover={BannerCover} />
            <Posts />
        </div>
    );
};

export default Homepage;