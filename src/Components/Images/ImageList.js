import React from 'react';
import styled from 'styled-components';
import Unsplash, { toJson } from 'unsplash-js';

import Button from '../Search/Button';
import ImageBoard from './ImageBoard';
import ImageCard from './ImageCard';
import Image from './Image';

const LoadButton = styled(Button)`
    display: block;
    margin: 1rem auto auto auto;
`;

export default function ImageList({ pics, random, setRandom, unsplash, query, firstPic, setFirstPic, setPics }) {
    const handleMoreSearchPhotos = async (e) => {
        e.preventDefault();
        setRandom(false);
    
        unsplash.search
            .photos(query, firstPic, 20)
            .then(toJson)
            .then((json) => {
                setPics([...pics, ...json.results]);
            })
            .then(setFirstPic(firstPic + 20))
    };
    
    const handleMoreSearchRandom = async () => {
        setRandom(true);

        unsplash.photos
            .getRandomPhoto({ count: "20" })
            .then(toJson)
            .then((json) => {
                setPics([...pics, ...json]);
            })
            .then(setFirstPic(firstPic + 20))
    };
    
    return (
        <>    
        <ImageBoard>
            {pics.map((pic) => (
                <ImageCard key={pic.id}>
                    <Image
                        alt={pic.alt_description}
                        src={pic.urls.regular}
                    />
                </ImageCard>
            ))}
        </ImageBoard>
        {pics.length >= 20 && !random &&    
            <LoadButton onClick={handleMoreSearchPhotos}>
                Load more...
            </LoadButton>
        }
        {pics.length >= 20 && random &&    
            <LoadButton onClick={handleMoreSearchRandom}>
                Load more...
            </LoadButton>
        }
        </> 
    );
}