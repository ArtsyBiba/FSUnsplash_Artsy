import React from 'react';

export default function SearchBar({ query, setQuery, searchPhotos }) {

    return (
        <>
            <form className='form' onSubmit={searchPhotos}> 
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
                <button type='submit' className='button'>
                    Search
                </button>
            </form>
        </>
    );
}