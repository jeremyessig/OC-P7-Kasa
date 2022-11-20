import React from 'react';
import './single.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';
import Carousel from '../../components/carousel/Carousel';

const Single = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({});

    useEffect(()=>{
        const getPost = async () => {
            const res = await fetch('../data.json').then(res => res.json());
            const data = res.find(post => post.id === path);
            if(!data){
                navigate('/404');
            }
            setPost(data);
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
                    <Dropdown label="Description"> 
                        <p>{post.description}</p>
                    </Dropdown>
                </div>
                <div className="single__info__features">
                    <Dropdown label="Equipement"> 
                        <ul>
                            {
                                post.equipments.map((feature, index) => <li key={index} >{ feature }</li> )
                            }
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Single;