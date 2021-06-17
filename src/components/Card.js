import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ id, title, year, poster, type }) => {
  
    return (
        <Link to={`/detail/${id}`}  key={id} className="card">
            <img src={poster} alt={title} className="card-img" />
            <div className="contenido">
                <h3 className="cardText">{title}</h3>
                <p className="cardText">{type} {year}</p>
            </div>
        </Link>
    )
}

export default Card
