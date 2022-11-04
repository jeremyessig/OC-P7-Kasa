import React from 'react';
import './single.scss';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';
import Dropdown2 from '../../components/dropdown/Dropdown2';
import Carousel from '../../components/carousel/Carousel';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({});
    // On doit destructurer sinon JS panique...
    const [host, setHost] = useState({});
    const [tags, setTags] = useState([]);
    const [desc, setDesc] = useState({});
    const [features, setFeatures] = useState({text:[]});
    const [pictures, setPictures] = useState([]);

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get('../data.json');
            const data = res.data.find(post => post.id === path);
            if(!data){
                navigate('/404');
            }
            setPost(data);
            // setHost(data.host);
            // setTags(data.tags);
            // setDesc({label: 'Description', text: data.description});
            // setFeatures({label: 'Equipements', text: data.equipments});
            // setTags(data.tags);
            // setPictures(data.pictures);
            setIsLoading(false)
        }
        getPost();
    }, []);
    
    // Bloque le premier rendu
    if (isLoading) return <div style={{marginTop: "140px"}}>Chargement...</div>
    return (
        <div className='single'>
            <div className="single__carousel">
                <Carousel pictures={post.pictures} />
            </div>
            <div className="single__container">
                <div className="left">
                    <div className="left__title">
                        <h1>{post.title}</h1>
                        <h4>{post.location}</h4>
                    </div>
                    <div className="left__tags">
                        {
                           post.tags.map((tag, index) => {
                                return (
                                <Tag key={index} tag={tag} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="right__host">
                        <div className="right__host__name">
                            <span>{post.host.name}</span>
                        </div>
                        <div className="right__host__picture">
                            <img src={post.host.picture} alt={post.host.name} />
                        </div>
                    </div>
                    <div className="right__rating">
                        <Rating props={post} />
                    </div>
                </div>
            </div>
            <div className="single__info">
                <div className="single__info__desc">
                    {/* <Dropdown label={desc.label} text={desc.text} /> */}
                    <Dropdown2 label="Description"> 
                        <p>{post.description}</p>
                    </Dropdown2>
                </div>
                <div className="single__info__features">
                    {/* <Dropdown label={features.label} text={features.text} /> */}
                    <Dropdown2 label="Equipement"> 
                        <ul>
                            {
                                post.equipments.map(feature => <li>{ feature }</li> )
                            }
                        </ul>
                    </Dropdown2>
                </div>
            </div>
        </div>
    );
};

export default Single;