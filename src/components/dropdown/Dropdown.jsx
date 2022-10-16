import React from 'react';
import { useState } from 'react';
import './dropdown.scss'
import arrow from './arrow.png'

const Dropdown = ( {props} ) => {

    const toggleVisibility = (event) =>{
        event.currentTarget.classList.toggle('--active');
    }

    let texts = [];

    // Découpe les textes en paragraphe en les injectant dans un tableau
    if(props.text instanceof Array == false){
        texts.push(props.text);
    }else{
        texts = props.text;
    }

    return (
        <div className='dropdown' onClick={toggleVisibility}>
            <div className="dropdown__label">
                <span>{props.label}</span>
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