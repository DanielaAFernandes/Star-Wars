import React, { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

function Inputs() {
  const { handleChange,
    filterNumericInput, nameTyped,
    setfilterNumericInput, emptyArray, setEmptyArray,
    setFilteredPlanets, showFilters, setShowFilters,
    columnOptions, setColumnOptions, apiData } = useContext(ApiContext);

  const comparisonOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
  ];

  const initialOptions = [
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ];

  useEffect(() => {
    let dataFilters = [...apiData];
    if (emptyArray.length === 0) {
      return setFilteredPlanets(apiData);
    }

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
  }, [emptyArray, apiData, setFilteredPlanets, filterNumericInput]);

  const handleSubmit = () => {
    setEmptyArray([...emptyArray, filterNumericInput]);
    const newOptions = columnOptions
      .filter((selected) => selected.value !== filterNumericInput.column);
    setColumnOptions(newOptions);
    setfilterNumericInput(
      {
        column: newOptions[0].value,
        comparison: 'maior que',
        value: 0,
      },
    );

    const newArray = Object.values(filterNumericInput);
    const filters = `${newArray[0]} ${newArray[1]} ${newArray[2]}`;
    const showFilterOnScreen = [];
    showFilterOnScreen.push(filters);
    setShowFilters([...showFilters, showFilterOnScreen]);
  };

  const removeItem = (deleteIndex) => {
    console.log(showFilters);
    const removedItem = showFilters
      .filter((_, index) => deleteIndex !== index);
    const removeFilters = emptyArray
      .filter((_, index) => deleteIndex !== index);
    console.log(emptyArray);
    setShowFilters(removedItem);
    const columnIsolated = showFilters[deleteIndex][0].split(' ')[0];
    // const comparisonIsolated1 = showFilters[deleteIndex][0].split(' ')[1];
    // const comparisonIsolated2 = showFilters[deleteIndex][0].split(' ')[2];
    // const comparisonIsolated = `${comparisonIsolated1} ${comparisonIsolated2}`;
    // const valueIsolated = showFilters[deleteIndex][0].split(' ')[3];

    setColumnOptions([...columnOptions, { value: columnIsolated, name: columnIsolated }]);
    setfilterNumericInput(
      {
        column: columnIsolated,
        comparison: 'maior que',
        value: 0,
      },
    );

    setEmptyArray(removeFilters);

    // setEmptyArray([{
    //   column: columnIsolated,
    //   comparison: comparisonIsolated,
    //   value: valueIsolated,
    // }]);
    console.log(emptyArray);
  };

  const removeFilters = () => {
    setShowFilters([]);
    setColumnOptions(initialOptions);
    setFilteredPlanets(apiData);
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
        { columnOptions.map((option) => (
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
      <button
        type="submit"
        data-testid="button-remove-filters"
        onClick={ removeFilters }
      >
        Remover todos os filtros
      </button>
      <ul className="filtersScreen">
        {showFilters.map((filter, index) => (
          <li data-testid="filter" key={ index }>
            <p>
              {filter}
            </p>
            <button
              type="submit"
              onClick={ () => removeItem(index) }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inputs;
