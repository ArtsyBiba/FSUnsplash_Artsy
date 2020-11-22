import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './App.css';

import SearchBar from './Search/SearchBar';
import ImageList from './Photos/ImageList';
import Title from './Title'

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

function App() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const [firstPic, setFirstPic] = useState(1);
  const [random, setRandom] = useState(false);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
        .photos(query, firstPic, 20)
        .then(toJson)
        .then((json) => {
            setPics([...pics, ...json.results]);
        })
        .then(setFirstPic(firstPic + 20))
  };
 
  const searchRandom = async () => {
    setRandom(true);
    
    unsplash.photos
      .getRandomPhoto({ count: "20" })
      .then(toJson)
      .then((json) => {
          setPics([...pics, ...json]);
      })
      .then(setFirstPic(firstPic + 20))
  };

  return (
    <div className='App'>
      <div className='container'>
        <Title>Unsplash Photo Search 🔍</Title>
        <SearchBar query={query} pics={pics} setQuery={setQuery} searchPhotos={searchPhotos} searchRandom={searchRandom} />
        <ImageList pics={pics} searchRandom={searchRandom} searchPhotos={searchPhotos} random={random} />
      </div>
    </div>
  );
}

export default App;
