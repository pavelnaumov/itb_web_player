import React from "react";

const PhotoCounter = ({ totalCount, currentIndex }) => {
  return (
    <div className="bottom-photo-counter">
      <p className="counter-current-total">{currentIndex}</p>
      <p className="counter-slash">/</p>
      <p className="counter-current-total">{totalCount}</p>
    </div>
  );
};

export default PhotoCounter;
