import React from 'react';
import { useState } from 'react';
import './dropdown.scss'
import arrow from './arrow.png'

const Dropdown = ( {props} ) => {

    const toggleVisibility = (event) =>{
        event.currentTarget.classList.toggle('--active');
    }

    return (
        <div className='dropdown' onClick={toggleVisibility}>
            <div className="dropdown__label">
                <span>{props.label}</span>
                <img src={arrow} alt="" />
            </div>
            <div className="dropdown__text">
                <p>{props.text}</p>
            </div>         
        </div>
    );
};

export default Dropdown;