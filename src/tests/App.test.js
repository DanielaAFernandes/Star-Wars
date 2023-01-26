import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";
// import mockData from './mockData';
// import { act } from 'react-dom/test-utils';

describe('test components', () => {
    beforeEach(() => {
        global.fetch = jest.
    })
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

test('if the column filter has the option "population"', () => {
    render(<App />);
    const population = screen.getByRole('option', { name: 'Population' });
    expect(population).toBeInTheDocument();
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

test('if the app has a button to filter', () => {
  render(<App />);
  const filterButton = screen.getByRole(
    'button',
    { name: /filtrar/i },
  );
  expect(filterButton).toBeInTheDocument();
  userEvent.click(filterButton);
});

// test('se o estado é apagado depois de clicar no botão de adicionar despesas', () => {
//     renderWithRouterAndRedux(<WalletForm />);
//     const adicionarButton = screen.getByRole(
//       'button',
//       { name: /adicionar despesa/i },
//     );
//     expect(adicionarButton).toBeInTheDocument();
//     userEvent.click(adicionarButton);
//     const valor = screen.getByLabelText('Valor:');
//     expect(valor.value).toBe('');
//   });


