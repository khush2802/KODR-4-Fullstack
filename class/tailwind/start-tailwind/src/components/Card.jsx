import React from 'react'
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
      <button className="card-btn">Learn More</button>
    </div>
  );
};

export default Card;