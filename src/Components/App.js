import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import randomWords from 'random-words';

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

function App() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const [firstPic, setFirstPic] = useState(1);
  const [randomWord, setRandomWord] = useState(null);

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
    setRandomWord(randomWords());
    
    unsplash.search
      .photos(randomWord, firstPic, 20)
      .then(toJson)
      .then((json) => {
          setPics([...pics, ...json.results]);
      })
      .then(setFirstPic(firstPic + 20))
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Unsplash Photo Search 🔍</h1>
        <SearchBar query={query} pics={pics} setQuery={setQuery} searchPhotos={searchPhotos} searchRandom={searchRandom} randomWord={randomWord} />
        <ImageList pics={pics} searchPhotos={searchPhotos} randomWord={randomWord} />
      </div>
    </div>
  );
}

export default App;
