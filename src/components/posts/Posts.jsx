import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import './posts.scss';

const Posts = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
            fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
        }, []);
    return (
        <div className='posts'>
                {data.map((post) => {
                    return (
                    <Card key={post.id} post={post} />
                    )
                })}
        </div>
    );
};

export default Posts;