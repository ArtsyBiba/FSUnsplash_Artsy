import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

function App() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
        .photos(query, 1 , 20)
        .then(toJson)
        .then((json) => {
            setPics(json.results);
        });
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Unsplash Photo Search 🔍</h1>
        <SearchBar query={query} setQuery={setQuery} searchPhotos={searchPhotos} />
        <ImageList pics={pics} />
      </div>
    </div>
  );
}

export default App;
