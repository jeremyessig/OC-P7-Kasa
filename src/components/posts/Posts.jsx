import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
            axios
            .get('./data.json')
            .then(res => setData(res.data));
        }, []);
    return (
        <div>
            
        </div>
    );
};

export default Posts;