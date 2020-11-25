import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// ensure that image list renders after search
describe('search more buttons', () => {
  it('search more button renders & works correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('Try "fancy cars" or "cute animals"');
    
    fireEvent.change(searchInput, { target: { value: 'cars' }});
    fireEvent.click(queryByTestId('search-button'));

    setTimeout(() => {
      expect(queryByTestId('image-list')).toBeTruthy();
    }, 1000);
  });
});

// ensure that image list renders after search random
describe('search more buttons', () => {
  it('search more button renders & works correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<App />);

    fireEvent.click(queryByTestId('search-button'));

    setTimeout(() => {
      expect(queryByTestId('random-search-button')).toBeTruthy();
    }, 1000);
  });
});

// ensure that spinner renders when loading search photos
describe('search more buttons', () => {
  it('search more button renders & works correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('Try "fancy cars" or "cute animals"');
    
    fireEvent.change(searchInput, { target: { value: 'cars' }});
    fireEvent.click(queryByTestId('search-button'));

    setTimeout(() => {
      expect(queryByTestId('loader-spinner')).toBeTruthy();
    }, 300);
  });
});

// ensure that spinner renders when loading search random
describe('search more buttons', () => {
  it('search more button renders & works correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<App />);

    fireEvent.click(queryByTestId('random-search-button'));

    setTimeout(() => {
      expect(queryByTestId('loader-spinner')).toBeTruthy();
    }, 300);
  });
});