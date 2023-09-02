import React from 'react';
import './card.css'; 

const Card = ({ image, title, subTitle, details, price }) => {
  return (
    <div className="card">
       <img src={image} alt={title} />
       <div className="card-content">
         <h5>{details}</h5>
         <h2>{title}</h2>
         <h3>{subTitle}</h3>
         <p>{price}</p>
       </div>
       <div className='card-button-container'>         
       <button className="view_details">View Details</button>
       </div>
     </div>
  );
};

export default Card;
