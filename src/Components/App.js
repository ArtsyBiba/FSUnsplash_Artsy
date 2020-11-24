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
    setRandom(false);

    unsplash.search
        .photos(query, firstPic, 20)
        .then(toJson)
        .then((json) => {
          setPics(json.results);
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
        setPics(json);
      })
      .then(setFirstPic(firstPic + 20))
      .then(setLoading(false))
  };

  return (
    <div className='App'>
      <div className='container'>
        <Title>Unsplash Photo Search 🔍</Title>
        <SearchBar query={query} setLoading={setLoading} pics={pics} setQuery={setQuery} searchPhotos={searchPhotos} searchRandom={searchRandom} />
        {loading
          ? <LoaderSpinner type="ThreeDots" color="black" height={100} width={100} />
          : <ImageList pics={pics} setPics={setPics} searchPhotos={searchPhotos} random={random} unsplash={unsplash} setRandom={setRandom} query={query} firstPic={firstPic} setFirstPic={setFirstPic} />
        }
      </div>
    </div>
  );
}

export default App;
