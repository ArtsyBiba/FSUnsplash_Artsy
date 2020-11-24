import React, { useState } from 'react';
import Unsplash from 'unsplash-js';
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

  return (
    <div className='App'>
      <div className='container'>
        <Title>Unsplash Photo Search 🔍</Title>
        <SearchBar 
          query={query} 
          setQuery={setQuery}
          setLoading={setLoading} 
          pics={pics}
          setPics={setPics} 
          random={random}
          unsplash={unsplash}
          setRandom={setRandom} 
          firstPic={firstPic} 
          setFirstPic={setFirstPic} 
        />
        {loading
          ? <LoaderSpinner 
              type="ThreeDots" 
              color="black" 
              height={100} 
              width={100} 
            />
          : <ImageList 
              pics={pics} 
              setPics={setPics} 
              unsplash={unsplash} 
              random={random}
              query={query} 
              firstPic={firstPic} 
              setFirstPic={setFirstPic} 
            />
        }
      </div>
    </div>
  );
}

export default App;
