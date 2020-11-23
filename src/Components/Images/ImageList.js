import React from 'react';
import styled from 'styled-components';

import Button from '../Search/Button';
import ImageBoard from './ImageBoard';
import ImageCard from './ImageCard';
import Image from './Image';

const LoadButton = styled(Button)`
    display: block;
    margin: 1rem auto auto auto;
`;

export default function ImageList({ pics, searchPhotos, random, searchRandom }) {
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
            <LoadButton onClick={searchPhotos}>
                Load more...
            </LoadButton>
        }
        {pics.length >= 20 && random &&    
            <LoadButton onClick={searchRandom}>
                Load more...
            </LoadButton>
        }
        </> 
    );
}