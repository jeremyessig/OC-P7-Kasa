import React from 'react';
import './carousel.scss';
import arrow from './arrow.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = ({pictures}) => {

    const [picture, setPicture] = useState();
    const [count, setCount] = useState(1);

    useEffect(()=>{
        setPicture(pictures[0])

    }, [pictures[0]])

    //let count = 0;
    // JS NE MARCHE PAS, EN PHP ÇA SE FAIT EN 2 MIN!!!!!! 

    const clickPrev = () => {
        console.log('start ' + count)
        if(count <= 0){
            count = pictures.length - 1;
        }else{
            count -= 1
        }
        console.log(count)
        //setPicture(pictures[count]);
    };


    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div className="picture">
                    <img src={picture} alt="" />
                </div>
            </div>
            <div className="carousel__nav">
                <div className="prev">
                    <img src={arrow} alt="prev" />
                </div>
                <div className="next" onClick={()=>{
                        if(count >= pictures.length){
                            setCount(1)
                            console.log('normalement ça doit reset')
                        }
                        setCount(count + 1)
                        setPicture(pictures[count])
                        console.log(count)
                    }
                }>
                    <img src={arrow} alt="next" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;