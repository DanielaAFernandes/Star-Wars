import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('if the filter name has data-testid="name-filter"', () => {
  render(<App />);
  const testNameId = screen.getByTestId('name-filter');
  expect(testNameId).toBeInTheDocument();
});

test('if the filter column has data-testid="column-filter"', () => {
    render(<App />);
    const testColumnId = screen.getByTestId('column-filter');
    expect(testColumnId).toBeInTheDocument();
  });

  test('if the filter comparison has data-testid="comparison-filter"', () => {
    render(<App />);
    const testComparisonId = screen.getByTestId('comparison-filter');
    expect(testComparisonId).toBeInTheDocument();
  });

test('if the screen renders a list of planets', () => {
    render(<App />);
    const tableItem = screen.getByRole('table');
    expect(tableItem).toBeInTheDocument();
  });
