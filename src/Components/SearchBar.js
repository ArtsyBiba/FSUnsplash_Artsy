import React from 'react';

export default function SearchBar({ query, setQuery, searchPhotos, searchRandom, randomWord, pics }) {

    return (
        <>
            <div className='search-bar'>
                <label className='label' htmlFor='query'> 
                    📷
                </label>
                <input
                    type='text'
                    data-testid='search-input'
                    name='query'
                    className='input'
                    placeholder={`Try "fancy cars" or "cute animals"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchPhotos} className='button'>
                    Search
                </button>
                <button onClick={searchRandom} className='random-button'>
                    Random Search
                </button>
            </div>
            {pics.length < 1 && randomWord &&   
                <p>No results for "{randomWord}" try again...</p>
            }
            {pics.length >= 1 && randomWord &&   
                <p>Search results for "{randomWord}"</p>
            }
        </>
    );
}