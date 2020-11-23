import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './App.css';

import SearchBar from './Search/SearchBar';
import ImageList from './Images/ImageList';
import Title from './Title'
import LoaderSpinner from './LoaderSpinner'

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

function App() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const [firstPic, setFirstPic] = useState(1);
  const [random, setRandom] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
        .photos(query, firstPic, 20)
        .then(toJson)
        .then((json) => {
            setPics([...pics, ...json.results]);
        })
        .then(setFirstPic(firstPic + 20))
        .then(setLoading(false))
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
      .then(setLoading(false))
  };

  return (
    <div className='App'>
      <div className='container'>
        <Title>Unsplash Photo Search 🔍</Title>
        <SearchBar query={query} setLoading={setLoading} pics={pics} setQuery={setQuery} searchPhotos={searchPhotos} searchRandom={searchRandom} />
        <ImageList pics={pics} searchRandom={searchRandom} searchPhotos={searchPhotos} random={random} />
        {loading &&
          <LoaderSpinner type="ThreeDots" color="black" height={100} width={100} />
        }
      </div>
    </div>
  );
}

export default App;
