import React from 'react';
import './carousel.scss';
import arrow from './arrow.png';
import { useState } from 'react';

const Carousel = ({pictures}) => {

    const [count, setCount] = useState(0);

    const clickPrev = () => {
        if(count <= 0){
            setCount(pictures.length - 1);
        }else{
            setCount(count - 1)
        }
    };

    const clickNext = () =>{
        if(count >= pictures.length - 1){
            setCount(0);
        }else{
            setCount(count + 1)
        }
    }


    return (
        <div className='carousel'>
            <div className="carousel__container">
                <div className="picture">
                    <img src={pictures[count]} alt="" />
                </div>
            </div>
            {(pictures.length > 1 ) &&
            <>            
            <div className="carousel__nav">
                 <button className="prev" onClick={clickPrev}>
                    <img src={arrow} alt="prev" />
                </button>
                <button className="next" onClick={clickNext}>
                    <img src={arrow} alt="next" />
                </button>
            </div>
            <div className="number">
                <p> {count + 1} / {pictures.length}</p>
            </div>
            </>
            }
        </div>
    );
};

export default Carousel;