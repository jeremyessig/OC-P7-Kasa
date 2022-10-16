import React from 'react';
import './single.scss';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    // On doit destructurer sinon JS panique...
    const [host, setHost] = useState({});
    const [tags, setTags] = useState([]);

    // BUG: React fait une boucle infinie !!!
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('../data.json');
            const data = res.data.find(post => post.id === path);
            setPost(data);
            setHost(data.host);
            setTags(data.tags);
        }
        getPost();
    }, []);

    return (
        <div className='single'>
            <div className="single__carousel"></div>
            <div className="single__title">
                <h1>{post.title}</h1>
                <h4>{post.location}</h4>
            </div>
            <div className="single__host">
                <div className="host">
                    <div className="host__name">
                        <span>{host.name}</span>
                    </div>
                    <div className="host__picture">
                        <img src={host.picture} alt={host.name} />
                    </div>
                </div>
            </div>
            <div className="single__tags">
                {
                console.log(post)
                }
            </div>
            <div className="single__rating">
                <Rating props={post} />
            </div>
            <div className="single__infos"></div>
        </div>
    );
};

export default Single;