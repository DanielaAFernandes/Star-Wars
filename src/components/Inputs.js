import React, { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

function Inputs() {
  const { handleChange,
    filterNumericInput, nameFilter, nameTyped,
    setfilterNumericInput, emptyArray, setEmptyArray,
    setFilteredPlanets, selectedOption,
    setSelectedOption } = useContext(ApiContext);

  const comparisonOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
  ];

  const columnOptions = [
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ];

  useEffect(() => {
    let dataFilters = [...nameFilter];
    const valueFilters = () => {
      emptyArray.forEach(({ comparison, column, value }) => {
        switch (comparison) {
        case 'maior que':
          dataFilters = dataFilters
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
          break;
        case 'menor que':
          dataFilters = dataFilters
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
          break;
        case 'igual a':
          dataFilters = dataFilters
            .filter((planet) => planet[column] === value);
          break;
        default:
          return dataFilters;
        }
      });
      setFilteredPlanets(dataFilters);
    };
    valueFilters();
  }, [filterNumericInput]);

  const handleSubmit = () => {
    setEmptyArray([...emptyArray, filterNumericInput, ...selectedOption]);
    setfilterNumericInput(
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    );
    const newOptions = columnOptions
      .filter((selected) => selected.value !== filterNumericInput.column);
    console.log(newOptions);
    setSelectedOption(newOptions);
  };

  const handleChangeColumn = (e) => {
    setfilterNumericInput(
      {
        ...filterNumericInput,
        column: e.target.value,
      },
    );
  };

  return (
    <div>
      <input
        className="name-filter"
        type="text"
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
        name="name"
        id="name-filter"
        value={ nameTyped.name }
        onChange={ handleChange }
      />
      <select
        className="column-filter"
        data-testid="column-filter"
        type="text"
        name="column"
        id="column"
        value={ filterNumericInput.column }
        onChange={ (e) => handleChangeColumn(e) }
      >
        Coluna
        { selectedOption.map((option) => (
          <option key={ option.value } value={ option.value }>{ option.name}</option>
        ))}
      </select>
      <select
        className="comparison"
        data-testid="comparison-filter"
        name="comparison"
        value={ filterNumericInput.comparison }
        onChange={ (e) => setfilterNumericInput({ ...filterNumericInput,
          comparison: e.target.value }) }
      >
        Operador
        { comparisonOptions.map((option) => (
          <option key={ option.value } value={ option.value }>{ option.name}</option>
        ))}
      </select>
      <input
        className="number-input"
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterNumericInput.value }
        onChange={ (e) => setfilterNumericInput({ ...filterNumericInput,
          value: e.target.value }) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Inputs;
