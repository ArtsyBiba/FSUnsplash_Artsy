import React from 'react';

export default function ImageList({ pics }) {
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
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </> 
    );
}