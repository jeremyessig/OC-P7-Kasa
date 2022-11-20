import './about.scss';
import BannerCover from './banner.jpg'
import React, { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';

const About = () => {
        const banner = {
        title: "",
        cover: BannerCover
    }

    const [data, setData] = useState([]);

    useEffect(()=>{
            fetch('./aboutData.json')
            .then(res => res.json())
            .then(data => setData(data))
        }, []);

    return (
        <div className='about'>
            <Banner banner={banner} />
            <div className="dropdown-container">
                {data.map((data, index) => {
                    return(
                        <Dropdown key={index} label={data.label}> 
                            <p>{data.text}</p>
                        </Dropdown>
                    )
                })}
            </div>
        </div>
    );
};

export default About;