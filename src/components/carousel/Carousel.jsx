import React from 'react';
import './carousel.scss';
import arrow from './arrow.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = ({pictures}) => {

    const [picture, setPicture] = useState();
    let [count, setCount] = useState(0);

    useEffect(()=>{
        setPicture(pictures[0])

        

    }, [pictures[0]])

    //let count = 0;
    // JS NE MARCHE PAS, EN PHP ÇA SE FAIT EN 2 MIN!!!!!! 

    const clickPrev = () => {
        console.log('start ' + count)
        if(count <= 0){
            setCount(pictures.length - 1);
            console.log('mer**')
        }else{
            count -= 1
            console.log('put**')
        }
        console.log(count)
        setPicture(pictures[count])

    };


    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div className="picture">
                    <img src={picture} alt="" />
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