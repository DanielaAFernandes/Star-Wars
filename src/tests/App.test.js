import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
// import testData from './mocks/testData';
// import { act } from 'react-dom/test-utils';

const mockedApi = {
    "count": 60, 
    "next": "https://swapi.dev/api/planets/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [
                "https://swapi.dev/api/people/1/", 
                "https://swapi.dev/api/people/2/", 
                "https://swapi.dev/api/people/4/", 
                "https://swapi.dev/api/people/6/", 
                "https://swapi.dev/api/people/7/", 
                "https://swapi.dev/api/people/8/", 
                "https://swapi.dev/api/people/9/", 
                "https://swapi.dev/api/people/11/", 
                "https://swapi.dev/api/people/43/", 
                "https://swapi.dev/api/people/62/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-20T20:58:18.411000Z", 
            "url": "https://swapi.dev/api/planets/1/"
        }, 
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.dev/api/people/5/", 
                "https://swapi.dev/api/people/68/", 
                "https://swapi.dev/api/people/81/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.dev/api/planets/2/"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, rainforests", 
            "surface_water": "8", 
            "population": "1000", 
            "residents": [], 
            "films": [
                "https://swapi.dev/api/films/1/"
            ], 
            "created": "2014-12-10T11:37:19.144000Z", 
            "edited": "2014-12-20T20:58:18.421000Z", 
            "url": "https://swapi.dev/api/planets/3/"
        }, 
        {
            "name": "Hoth", 
            "rotation_period": "23", 
            "orbital_period": "549", 
            "diameter": "7200", 
            "climate": "frozen", 
            "gravity": "1.1 standard", 
            "terrain": "tundra, ice caves, mountain ranges", 
            "surface_water": "100", 
            "population": "unknown", 
            "residents": [], 
            "films": [
                "https://swapi.dev/api/films/2/"
            ], 
            "created": "2014-12-10T11:39:13.934000Z", 
            "edited": "2014-12-20T20:58:18.423000Z", 
            "url": "https://swapi.dev/api/planets/4/"
        }, 
        {
            "name": "Dagobah", 
            "rotation_period": "23", 
            "orbital_period": "341", 
            "diameter": "8900", 
            "climate": "murky", 
            "gravity": "N/A", 
            "terrain": "swamp, jungles", 
            "surface_water": "8", 
            "population": "unknown", 
            "residents": [], 
            "films": [
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:42:22.590000Z", 
            "edited": "2014-12-20T20:58:18.425000Z", 
            "url": "https://swapi.dev/api/planets/5/"
        }, 
        {
            "name": "Bespin", 
            "rotation_period": "12", 
            "orbital_period": "5110", 
            "diameter": "118000", 
            "climate": "temperate", 
            "gravity": "1.5 (surface), 1 standard (Cloud City)", 
            "terrain": "gas giant", 
            "surface_water": "0", 
            "population": "6000000", 
            "residents": [
                "https://swapi.dev/api/people/26/"
            ], 
            "films": [
                "https://swapi.dev/api/films/2/"
            ], 
            "created": "2014-12-10T11:43:55.240000Z", 
            "edited": "2014-12-20T20:58:18.427000Z", 
            "url": "https://swapi.dev/api/planets/6/"
        }, 
        {
            "name": "Endor", 
            "rotation_period": "18", 
            "orbital_period": "402", 
            "diameter": "4900", 
            "climate": "temperate", 
            "gravity": "0.85 standard", 
            "terrain": "forests, mountains, lakes", 
            "surface_water": "8", 
            "population": "30000000", 
            "residents": [
                "https://swapi.dev/api/people/30/"
            ], 
            "films": [
                "https://swapi.dev/api/films/3/"
            ], 
            "created": "2014-12-10T11:50:29.349000Z", 
            "edited": "2014-12-20T20:58:18.429000Z", 
            "url": "https://swapi.dev/api/planets/7/"
        }, 
        {
            "name": "Naboo", 
            "rotation_period": "26", 
            "orbital_period": "312", 
            "diameter": "12120", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grassy hills, swamps, forests, mountains", 
            "surface_water": "12", 
            "population": "4500000000", 
            "residents": [
                "https://swapi.dev/api/people/3/", 
                "https://swapi.dev/api/people/21/", 
                "https://swapi.dev/api/people/35/", 
                "https://swapi.dev/api/people/36/", 
                "https://swapi.dev/api/people/37/", 
                "https://swapi.dev/api/people/38/", 
                "https://swapi.dev/api/people/39/", 
                "https://swapi.dev/api/people/42/", 
                "https://swapi.dev/api/people/60/", 
                "https://swapi.dev/api/people/61/", 
                "https://swapi.dev/api/people/66/"
            ], 
            "films": [
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:52:31.066000Z", 
            "edited": "2014-12-20T20:58:18.430000Z", 
            "url": "https://swapi.dev/api/planets/8/"
        }, 
        {
            "name": "Coruscant", 
            "rotation_period": "24", 
            "orbital_period": "368", 
            "diameter": "12240", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "cityscape, mountains", 
            "surface_water": "unknown", 
            "population": "1000000000000", 
            "residents": [
                "https://swapi.dev/api/people/34/", 
                "https://swapi.dev/api/people/55/", 
                "https://swapi.dev/api/people/74/"
            ], 
            "films": [
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:54:13.921000Z", 
            "edited": "2014-12-20T20:58:18.432000Z", 
            "url": "https://swapi.dev/api/planets/9/"
        }, 
        {
            "name": "Kamino", 
            "rotation_period": "27", 
            "orbital_period": "463", 
            "diameter": "19720", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "ocean", 
            "surface_water": "100", 
            "population": "1000000000", 
            "residents": [
                "https://swapi.dev/api/people/22/", 
                "https://swapi.dev/api/people/72/", 
                "https://swapi.dev/api/people/73/"
            ], 
            "films": [
                "https://swapi.dev/api/films/5/"
            ], 
            "created": "2014-12-10T12:45:06.577000Z", 
            "edited": "2014-12-20T20:58:18.434000Z", 
            "url": "https://swapi.dev/api/planets/10/"
        }
    ]
  }

describe('test', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockedApi)
        });
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

  test('if the filter name has data-testid="name-filter"', () => {
  render(<App />);
  const testNameId = screen.getByTestId('name-filter');
  expect(testNameId).toBeInTheDocument();
});

test('if the filter column has data-testid="column-filter" and has the option "population"', () => {
    render(<App />);
    const testColumnId = screen.getByTestId('column-filter');
    expect(testColumnId).toBeInTheDocument();
    const filterButton = screen.getByRole(
        'button',
        { name: /filtrar/i },
      );
      expect(filterButton).toBeInTheDocument();
    act(() => {
      userEvent.selectOptions(testColumnId, ["population"]);
      userEvent.click(filterButton);
    });
  });

  test('if the filter comparison has data-testid="comparison-filter" and has the option "maior que"', () => {
    render(<App />);
    const testComparisonId = screen.getByTestId('comparison-filter');
    expect(testComparisonId).toBeInTheDocument();
    const filterButton = screen.getByRole(
        'button',
        { name: /filtrar/i },
      );
      expect(filterButton).toBeInTheDocument();
    act(() => {
      userEvent.selectOptions(testComparisonId, ["maior que"]);
      userEvent.click(filterButton);
    });
      userEvent.selectOptions(testComparisonId, ["maior que"]);
      userEvent.click(filterButton);
  });

  test('if the filter value has data-testid="value-filter" and has the option 0', () => {
    render(<App />);
    const testValueId = screen.getByTestId('value-filter');
    expect(testValueId).toBeInTheDocument();
    const filterButton = screen.getByRole(
        'button',
        { name: /filtrar/i },
      );
      expect(filterButton).toBeInTheDocument();
    act(() => {
      userEvent.type(testValueId, [0]);
      userEvent.click(filterButton);
    });
      userEvent.type(testValueId, [0]);
      userEvent.click(filterButton);
  });

test('if the screen renders a list of planets', () => {
    render(<App />);
    const tableItem = screen.getByRole('table');
    expect(tableItem).toBeInTheDocument();
  });

test('if the planet Alderaan appears on the screen', async () => {
    render(<App />);
    await waitFor(() => {
        expect(screen.getByRole('cell', { name: /alderaan/i })).toBeInTheDocument();
      },);
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
//   userEvent.selectOptions(column, ["population"]);
    act(() => {
        userEvent.click(filterButton);
    });
});

test('the name filter', async () => {
    render(<App />);
    const filterNameInput = screen.getByTestId('name-filter');
    act(() => {
        userEvent.type(filterNameInput, "t");
      });
    const planets = await screen.findAllByTestId('planet-name');
    expect(planets).toHaveLength(3);
});

test('if the filters can be applied', async () => {
    render(<App />);
    await waitFor (() => expect(fetch).toHaveBeenCalled());
    const column = screen.getByTestId("column-filter");
    const comparison = screen.getByTestId("comparison-filter");
    const value = screen.getByTestId("value-filter");
    const btn = screen.getByTestId("button-filter");
    act(() => {
      userEvent.selectOptions(column, "orbital_period");
      userEvent.selectOptions(comparison, 'igual a');
      userEvent.type(value, '304'); 
    });

    expect(column).toHaveValue('orbital_period')
    expect(comparison).toHaveValue('igual a')
    expect(value).toHaveValue(304)
    userEvent.click(btn);
    
    await waitFor (() => expect(fetch).toHaveBeenCalled());
    expect( await screen.findAllByTestId("planet-name")).toHaveLength(10);
});
})

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


