import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import SearchBar from './SearchBar';

it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBar/>);

  expect(queryByTestId('search-button')).toBeTruthy();
  expect(queryByTestId('random-search-button')).toBeTruthy();
  expect(queryByPlaceholderText('Try "fancy cars" or "cute animals"')).toBeTruthy();
})

describe('Input Value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<SearchBar/>);

    const searchInput = queryByPlaceholderText('Try "fancy cars" or "cute animals"');

    fireEvent.change(searchInput, { target: { value: 'test' }});

    expect(searchInput.value).toBe('test');
  })
})