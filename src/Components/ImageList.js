import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const LoadButton = styled(Button)`
    display: block;
    margin: 1rem auto auto auto;
`;

export default function ImageList({ pics, searchPhotos, random, searchRandom }) {
    return (
        <>    
        <div className='card-list'>
                {pics.map((pic) => (
                    <div className='card' key={pic.id}>
                        <img
                            className='card--image'
                            alt={pic.alt_description}
                            src={pic.urls.regular}
                            width='50%'
                            height='50%'
                        ></img>
                    </div>
                ))}
        </div>
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