import React from 'react';

import Button from './Button';
import Label from './Label';
import SearchBox from './SearchBox';
import SearchInput from './SearchInput';

export default function SearchBar({ query, setQuery, searchPhotos, searchRandom }) {
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
                <Button onClick={searchPhotos}>
                    Search
                </Button>
                <Button secondary onClick={searchRandom}>
                    Random Search
                </Button>
            </SearchBox>
        </>
    );
}