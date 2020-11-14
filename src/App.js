import React from 'react';
import './App.css';
import SearchPhotos from './Components/searchPhotos';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Unsplash Photo Search</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
