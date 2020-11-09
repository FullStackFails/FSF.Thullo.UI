import React from 'react';
import Button from './Button';
import { render, screen, fireEvent } from '@testing-library/react'

test('renders correct button text', () => {
  const onClickCallback = jest.fn();
  const buttonText = 'btnText';

  render(<Button onClick={onClickCallback} btnText={buttonText} />);

  expect(screen.getByText(buttonText)).toBeInTheDocument();
});

test('calls the onClick prop when clicked', () => {
  const onClickCallback = jest.fn();
  const buttonText = 'btnText';

  render(<Button onClick={onClickCallback} btnText={buttonText} />);

  fireEvent.click(screen.getByText(buttonText));

  expect(onClickCallback).toHaveBeenCalledTimes(1);
});