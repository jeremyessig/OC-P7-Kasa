import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './posts.scss';

const Posts = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
            axios
            .get('./data.json')
            .then(res => setData(res.data));
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