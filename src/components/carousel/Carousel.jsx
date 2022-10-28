import React from 'react';
import './carousel.scss';
import arrow from './arrow.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = ({pictures}) => {

    const [count, setCount] = useState(0);

    const clickPrev = () => {
        if(count <= 0){
            setCount(pictures.length - 1);
        }else{
            setCount(count - 1)
        }
    };


    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div className="picture">
                    <img src={pictures[count]} alt="" />
                </div>
            </div>
            <div className="carousel__nav">
                <div className="prev" onClick={clickPrev}>
                    <img src={arrow} alt="prev" />
                </div>
                <div className="next">
                    <img src={arrow} alt="next" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;