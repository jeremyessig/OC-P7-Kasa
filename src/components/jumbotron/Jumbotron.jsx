import React from 'react';
import './jumbotron.scss';

const Jumbotron = (props) => {
    return (
        <div className='jumbotron'>
            <span className="jumbotron__text" src={props.title}></span>
            <div className="jumbotron__img" src={props.img} alt={props.alt}></div>
        </div>
    );
};

export default Jumbotron;