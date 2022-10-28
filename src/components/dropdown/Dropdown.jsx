import React from 'react';
import { useState } from 'react';
import './dropdown.scss'
import arrow from './arrow.png'

const Dropdown = ( {label, text} ) => {

    const toggleVisibility = (event) =>{
        event.currentTarget.classList.toggle('--active');
    }

    let texts = [];

    //Découpe les textes en paragraphe en les injectant dans un tableau
    if(text instanceof Array == false){
        texts.push(text);
    }else{
        texts = text;
    }

    return (
        <div className='dropdown' onClick={toggleVisibility}>
            <div className="dropdown__label">
                <span>{label}</span>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="dropdown__text">
                {
                    texts.map((text, index ) => {
                        return(
                            <p key={index}> {text} </p>
                        )
                    })
                }
            </div>         
        </div>
    );
};

export default Dropdown;