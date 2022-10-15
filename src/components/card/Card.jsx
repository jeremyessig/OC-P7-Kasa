import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss'

const Card = ({post}) => {
    return (
        <Link key={post.id} className="card" to={"/post/" + post.id} >
            <div className="card__cover">
                <img src={post.cover} alt="" />
            </div>
            <div className="card__title">
                {post.title}
            </div>
            <div className="card__overlay"></div>
        </Link>
    );
};

export default Card;