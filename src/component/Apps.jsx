import React, { useState, useEffect } from 'react';
  /*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import SearchField from './SearchField';
import GifCard from './GifCard';
import RandomSearchButton from './RandomSearchButton';

const API_KEY = 'CEO9wE9aMwsOsjHDKf9DAWI3XEfBfPzA';

function Apps() {
  const [gifs, setGifs] = useState([]);
  const [randomGif, setRandomGif] = useState(null);

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  const fetchTrendingGifs = async () => {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching trending gifs:', error);
    }
    };

    const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };


  const handleRandomSearch = async () => {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      );
      const data = await response.json();
      setRandomGif(data.data);
    } catch (error) {
      console.error('Error fetching random gif:', error);
    }
  };


  return (
    <div>
      <h1>GIPHY App</h1>
      <SearchField onSearch={handleSearch} />
      <RandomSearchButton handleRandomSearch={handleRandomSearch} />
      <div>
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}

              {/* Render the randomly fetched gif */}
      {randomGif && <GifCard gif={randomGif} />}

      </div>
    </div>
  );
}

export default Apps;
