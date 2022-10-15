import React from 'react';
import './tag.scss'

const Tag = ({tag}) => {
    return (
        <div className='tag'>
            <span>{tag}</span>
        </div>
    );
};

export default Tag;