import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

function Inputs() {
  const { handleChangeNumeric, handleChange,
    filterNumericInput, nameFilter, nameTyped,
    setfilterNumericInput } = useContext(ApiContext);
  console.log(filterNumericInput);

  const comparisonOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
  ];

  let dataFilters = [...nameFilter];
  console.log(dataFilters);

  const combinedFilter = Object.values(filterNumericInput);

  const valueFilters = () => {
    console.log('olá');
    combinedFilter.forEach(({ comparison, column, value }) => {
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
    console.log(dataFilters);
    return dataFilters;
  };

  const handleSubmit = () => {
    setfilterNumericInput({
      ...filterNumericInput,
    });
    valueFilters();
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
        onChange={ handleChangeNumeric }
      >
        <option
          value={ filterNumericInput.column.population }
        >
          population
        </option>
        <option
          value={ filterNumericInput.column.orbital_period }
        >
          orbital_period
        </option>
        <option
          value={ filterNumericInput.column.diameter }
        >
          diameter
        </option>
        <option
          value={ filterNumericInput.column.rotation_period }
        >
          rotation_period
        </option>
        <option
          value={ filterNumericInput.column.surface_water }
        >
          surface_water
        </option>
      </select>
      <select
        className="comparison"
        data-testid="comparison-filter"
        name="comparison"
        value={ filterNumericInput.comparison }
        onChange={ handleChangeNumeric }
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
        onChange={ handleChangeNumeric }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
      <span className="span-message">
        { filterNumericInput.column }
      </span>
    </div>
  );
}

export default Inputs;
