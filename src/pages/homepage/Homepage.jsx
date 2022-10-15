import React from 'react';
import Banner from '../../components/banner/Banner';
import Posts from '../../components/posts/Posts';
import BannerCover from './banner.png';
import './homepage.scss';


const Homepage = () => {

    const banner = {
        title: "Chez vous, partout et ailleurs",
        cover: BannerCover
    }

    return (
        <div className='homepage'>
            <Banner banner={banner} />
            <Posts />
        </div>
    );
};

export default Homepage;