import React from 'react';

const Photo = ({ photo }) => {
  return (
    <div className="grid-item">
      <img src={photo.url_o} alt="tims doors" />
    </div>
  );
};

export default Photo;
