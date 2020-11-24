import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';
import App from '../App';

// ensure that all components render correctly
it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBar />);

  expect(queryByTestId('search-button')).toBeTruthy();
  expect(queryByTestId('random-search-button')).toBeTruthy();
  expect(queryByPlaceholderText('Try "fancy cars" or "cute animals"')).toBeTruthy();
});

// ensure that input value updates on change
describe('Input Value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('Try "fancy cars" or "cute animals"');

    fireEvent.change(searchInput, { target: { value: 'test' }});

    expect(searchInput.value).toBe('test');
  });
});

// ensure that search photos button works
// describe('search photos button', () => {
//   describe('with empty query', () => {
//     it('does not trigger handleSearchPhotos function', () => {
//       const requestSearchPhotos = jest.fn();
//       const { queryByTestId } = render(<App />);

//       fireEvent.click(queryByTestId('search-button'));

//       expect(requestSearchPhotos).not.toHaveBeenCalled();
//     });
//   });

//   describe('with data inside query', () => {
//     it('triggers handleSearchPhotos function', () => {
//       const requestSearchPhotos = jest.fn();  
//       const { queryByTestId, queryByPlaceholderText } = render(<App />);    
//       const searchInput = queryByPlaceholderText('Try "fancy cars" or "cute animals"'); 

//       fireEvent.change(searchInput, { target: { value: 'test' }});
//       fireEvent.click(queryByTestId('search-button'));

//       expect(requestSearchPhotos).toHaveBeenCalled();
//     });
//   });
// });

// ensure that search photos button works

describe('search random button', () => {
  it('does trigger handleSearchRandom function', () => {
    const handleSearchRandom = jest.fn();
    const { queryByTestId } = render(<SearchBar handleSearchRandom={handleSearchRandom} />);

    fireEvent.click(queryByTestId('random-search-button'));

    expect(handleSearchRandom).toHaveBeenCalled();
  });
});
