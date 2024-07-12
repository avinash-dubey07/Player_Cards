import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img className="player-image" src={image} alt={`${name}`} />
      <h2 className="player-name">{name}</h2>
      <h3 className="player-position">{position}</h3>
      <div className="player-stats">
        <p><strong>Points Per Game:</strong> {stats.pointsPerGame}</p>
        <p><strong>Assists Per Game:</strong> {stats.assistsPerGame}</p>
        <p><strong>Rebounds Per Game:</strong> {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;


