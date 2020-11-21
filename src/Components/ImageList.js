import React from 'react';

export default function ImageList({ pics, searchPhotos }) {

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
        {pics.length > 1 &&    
            <button onClick={searchPhotos} className='load-button'>
                Load more...
            </button>
        }
        </> 
    );
}