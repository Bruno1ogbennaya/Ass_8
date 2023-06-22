import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchField from './SearchField';
import GifCard from './GifCard';

const API_KEY = 'YOUR_API_KEY';

function Apps() {
  const [gifs, setGifs] = useState([]);

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

  return (
    <div>
      <h1>GIPHY Search App</h1>
      <SearchField onSearch={handleSearch} />
      <div>
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
}

export default Apps;
