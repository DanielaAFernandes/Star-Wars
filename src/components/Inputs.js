import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

const comparisonOptions = [
  { name: 'maior que', value: 'maior que' },
  { name: 'menor que', value: 'menor que' },
  { name: 'igual a', value: 'igual a' },
];

function Inputs() {
  const { filterNumericInput, handleChangeNumeric } = useContext(ApiContext);

  return (
    <div>
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
        type="button"
        data-testid="button-filter"
        // onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Inputs;
