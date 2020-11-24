import React from 'react';
import { toJson } from 'unsplash-js';

import Button from './Button';
import Label from './Label';
import SearchBox from './SearchBox';
import SearchInput from './SearchInput';

export default function SearchBar({ query, setQuery, setLoading, setRandom, setPics, unsplash, setFirstPic, firstPic }) {
    const handleSearchPhotos = (e) => {
        e.preventDefault();
        setLoading(true);
        setRandom(false);
        
        setTimeout(() => 
            unsplash.search
                .photos(query, firstPic, 20)
                .then(toJson)
                .then((json) => {
                    setPics(json.results);
                })
                .then(setFirstPic(firstPic + 20))
                .then(setLoading(false))
            , 500)
    };

    const handleSearchRandom = () => {
        setLoading(true);
        setRandom(true);
        
        setTimeout(() => 
            unsplash.photos
                .getRandomPhoto({ count: "20" })
                .then(toJson)
                .then((json) => {
                    setPics(json);
                })
                .then(setFirstPic(firstPic + 20))
                .then(setLoading(false))
        , 500);
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
                <Button data-testid='search-button' onClick={handleSearchPhotos}>
                    Search
                </Button>
                <Button data-testid='random-search-button' secondary onClick={handleSearchRandom}>
                    Random Search
                </Button>
            </SearchBox>
        </>
    );
}