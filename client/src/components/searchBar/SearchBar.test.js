import React from 'react';
import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react'

test('search input starts with correct placeholder text', () => {
  const placeholder = 'placeholder text';
  const onClick = jest.fn();
  const btnText = 'button text';

  render(
    <SearchBar
      onClick={onClick}
      placeholder={placeholder}
      label={btnText}
    />
  );

  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});