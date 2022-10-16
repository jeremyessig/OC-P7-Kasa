import React from 'react';
import './single.scss';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    // On doit destructurer sinon JS panique...
    const [host, setHost] = useState({});
    const [tags, setTags] = useState([]);
    const [desc, setDesc] = useState({});
    const [features, setFeatures] = useState({});

    // BUG: React fait une boucle infinie !!!
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('../data.json');
            const data = res.data.find(post => post.id === path);
            setPost(data);
            setHost(data.host);
            setTags(data.tags);
            setDesc({label: 'Description', text: data.description});
            setFeatures({label: 'Equipements', text: data.equipments});
            setTags(data.tags);
        }
        getPost();
    }, []);

    return (
        <div className='single'>
            <div className="single__carousel"></div>
            <div className="single__container">
                <div className="left">
                    <div className="left__title">
                        <h1>{post.title}</h1>
                        <h4>{post.location}</h4>
                    </div>
                    <div className="left__tags">
                        {
                            tags.map(tag => {
                                return (
                                <Tag tag={tag} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="right__host">
                        <div className="right__host__name">
                            <span>{host.name}</span>
                        </div>
                        <div className="right__host__picture">
                            <img src={host.picture} alt={host.name} />
                        </div>
                    </div>
                    <div className="right__rating">
                        <Rating props={post} />
                    </div>
                </div>
            </div>
            <div className="single__info">
                <div className="single__info__desc">
                    <Dropdown props={desc} />
                </div>
                <div className="single__info__features">
                    <Dropdown props={features} />
                </div>
            </div>
        </div>
    );
};

export default Single;