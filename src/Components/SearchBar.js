import React from 'react';
import Button from './Button';

export default function SearchBar({ query, setQuery, searchPhotos, searchRandom }) {
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
                <Button onClick={searchPhotos}>
                    Search
                </Button>
                <Button secondary onClick={searchRandom}>
                    Random Search
                </Button>
            </div>
        </>
    );
}