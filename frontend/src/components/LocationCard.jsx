import React from 'react';

const LocationCard = ({ location }) => {
  return (
    <a 
      href={`/${location.slug}`}
      className="location-card"
    >
      <div className="location-banner-overlay">
        <img src={location.bannerImage} alt={location.name} className="location-banner-image" />
      </div>
      <div className="location-content">
        <h3 className="location-name">{location.name}</h3>
      </div>
    </a>
  );
};

export default LocationCard;
