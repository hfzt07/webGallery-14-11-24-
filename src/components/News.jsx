import React from 'react';
import './News.css';

const News = ({ image, title, description }) => {
  return (
    <div className="news-card">
      <div className="news-image-container">
        <img 
          src={image} 
          alt={title}
          className="news-image"
        />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default News; 