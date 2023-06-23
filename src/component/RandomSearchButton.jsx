import React from 'react';

const RandomSearchButton = ({ handleRandomSearch }) => {
  return (
    <button onClick={handleRandomSearch}>
      Random Search
    </button>
  );
};

export default RandomSearchButton;
