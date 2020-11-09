import React from 'react';
import HomeLogo from './HomeLogo';
import { render, screen } from '@testing-library/react'

test('renders correct home logo text', () => {
  const homeLogoText = "homeLogoText";

  render(<HomeLogo homeLogoText={homeLogoText} />);

  expect(screen.getByText(homeLogoText)).toBeInTheDocument();
});