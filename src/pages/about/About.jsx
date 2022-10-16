import './about.scss';
import BannerCover from './banner.jpg'

import React, { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';
import axios from "axios";

const About = () => {
        const banner = {
        title: "",
        cover: BannerCover
    }

    const [data, setData] = useState([]);

    useEffect(()=>{
            axios
            .get('./aboutData.json')
            .then(res => setData(res.data));
        }, []);

    return (
        <div className='about'>
            <Banner banner={banner} />
            <div className="dropdown-container">
                {data.map((data, index) => {
                    return (
                    <Dropdown key={index} props={data} />
                    )
                })}
            </div>
        </div>
    );
};

export default About;