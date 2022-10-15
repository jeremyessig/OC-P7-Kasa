import './about.scss';
import BannerCover from './banner.jpg'

import React from 'react';
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';

const About = () => {
        const banner = {
        title: "",
        cover: BannerCover
    }

    const dp = {
        label: "Que dois-je faire ?",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima quia, minus dolor vel velit! Voluptatum obcaecati possimus doloribus! Deleniti doloremque obcaecati culpa. Laboriosam animi aperiam at, illum excepturi ipsum."
    }

    return (
        <div className='about'>
            <Banner banner={banner} />
            <Dropdown props={dp} />
        </div>
    );
};

export default About;