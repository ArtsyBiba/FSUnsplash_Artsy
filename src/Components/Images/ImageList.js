import React from 'react';
import styled from 'styled-components';
import { toJson } from 'unsplash-js';

import Button from '../Search/Button';
import ImageBoard from './ImageBoard';
import ImageCard from './ImageCard';
import Image from './Image';

const LoadButton = styled(Button)`
    display: block;
    margin: 1rem auto auto auto;
`;

export default function ImageList({ pics, random, unsplash, query, firstPic, setFirstPic, setPics }) {
    const handleMoreSearch = async (e) => {
        if (!random) { 
            e.preventDefault();
    
            unsplash.search
                .photos(query, firstPic, 20)
                .then(toJson)
                .then((json) => {
                    setPics([...pics, ...json.results]);
                })
                .then(setFirstPic(firstPic + 20))
        } else unsplash.photos
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
            <LoadButton onClick={handleMoreSearch}>
                Load more...
            </LoadButton>
        }
        {pics.length >= 20 && random &&    
            <LoadButton onClick={handleMoreSearch}>
                Load more...
            </LoadButton>
        }
        </> 
    );
}