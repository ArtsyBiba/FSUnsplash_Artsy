import React from 'react';

import Button from './Button';
import Label from './Label';
import SearchBox from './SearchBox';
import SearchInput from './SearchInput';

export default function SearchBar({ query, setQuery, searchPhotos, searchRandom, setLoading }) {
    const handleSearchPhotos = (e) => {
        setLoading(true);
        setTimeout(() => searchPhotos(e), 1000);
    };

    const handleSearchRandom = () => {
        setLoading(true);
        setTimeout(() => searchRandom(), 1000);
    };
    
    return (
        <>
            <SearchBox>
                <Label> 📷 </Label>
                <SearchInput
                    type='text'
                    data-testid='search-input'
                    name='query'
                    className='input'
                    placeholder={`Try "fancy cars" or "cute animals"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleSearchPhotos}>
                    Search
                </Button>
                <Button secondary onClick={handleSearchRandom}>
                    Random Search
                </Button>
            </SearchBox>
        </>
    );
}