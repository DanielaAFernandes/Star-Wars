import React, { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

function Inputs() {
  const { handleChange,
    filterNumericInput, nameFilter, nameTyped,
    setfilterNumericInput, emptyArray, setEmptyArray,
    setFilteredPlanets } = useContext(ApiContext);
  // const [comparisonFilter, setComparisonFilter] = useState('maior que');
  // const [columnFilter, setColumnFilter] = useState('population');
  // const [valueFilter, setValueFilter] = useState(0);

  const comparisonOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
  ];

  useEffect(() => {
    let dataFilters = [...nameFilter];
    console.log(filterNumericInput);
    console.log(emptyArray);
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
      console.log(dataFilters);
      setFilteredPlanets(dataFilters);
    };
    valueFilters();
  }, [filterNumericInput]);

  const handleSubmit = () => {
    console.log('oi');
    setEmptyArray([...emptyArray, filterNumericInput]);
    setfilterNumericInput(
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
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
        onChange={ (e) => setfilterNumericInput({ ...filterNumericInput,
          column: e.target.value }) }
      >
        <option
          value="population"
        >
          population
        </option>
        <option
          value="orbital_period"
        >
          orbital_period
        </option>
        <option
          value="diameter"
        >
          diameter
        </option>
        <option
          value="rotation_period"
        >
          rotation_period
        </option>
        <option
          value="surface_water"
        >
          surface_water
        </option>
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
