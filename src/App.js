import React from 'react';
import Unsplash from 'unsplash-js';

import './App.css';
import SearchPhotos from './Components/searchPhotos';

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Unsplash Photo Search</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
