import React from 'react';
import './single.scss';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [host, setHost] = useState({});

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('../data.json');
            res.data.forEach(postFetched => {
                if (postFetched.id === path ){
                    setPost(postFetched);
                    setHost(postFetched.host);
                }
            });
        }
        getPost();
    });

    return (
        <div className='single'>
            <div className="single__carousel"></div>
            <div className="single__title">
                <h1>{post.title}</h1>
            </div>
            <div className="single__host">
                <div className="host">
                    <div className="host__name">
                        <span>{host.name}</span>
                    </div>
                    <div className="host__picture">

                    </div>
                </div>
            </div>
            <div className="single__tags"></div>
            <div className="single__rating"></div>
            <div className="single__infos"></div>
        </div>
    );
};

export default Single;