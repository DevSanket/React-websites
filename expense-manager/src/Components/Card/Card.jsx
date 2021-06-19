import React from "react";
import { Link } from 'react-router-dom';
import "./Card.scss";
const Card = ({title,imgUrl,Links}) => {
  return (
    <div className="container">
      
        <div className="card">
          <img className="img" src={imgUrl} alt="" />
          <br/>
          <Link to={Links} className="btn-grad">
            <div className="btn-text">{title}</div>
          </Link>
        </div>
    </div>
  );
};

export default Card;
