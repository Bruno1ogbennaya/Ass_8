import React from 'react';

function GifCard({ gif }) {
  return (
    <div>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
}

export default GifCard;
