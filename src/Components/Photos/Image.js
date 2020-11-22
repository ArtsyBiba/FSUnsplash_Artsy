import styled from 'styled-components';

const Image = styled.img`
    display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
    transition: transform 400ms ease-out;
    
    &:hover {
	    transform: scale(1.15);
    }
`;

export default Image;