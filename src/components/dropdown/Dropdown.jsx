import React from 'react';
import { useState } from 'react';
import './dropdown.scss'
import arrow from './arrow.png'

const Dropdown = ( {label, children} ) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleVisibility = (event) =>{
        setIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown ${isOpen && '--active'}`} onClick={toggleVisibility}>
            <div className="dropdown__label">
                <span>{label}</span>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="dropdown__text">
                {
                    children
                }
            </div>         
        </div>
    );
};

export default Dropdown;