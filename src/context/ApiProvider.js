import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      textFilter: { name: '' },
    },
  });
  const [filterNumericInput, setfilterNumericInput] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [filterNumericValues, setFilterNumericValues] = useState([]);

  // const [filteredApiData, setFilteredApiData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setApiData(data.results);
    };
    fetchApi();
  }, []);

  apiData.forEach((planet) => delete planet.residents);

  const nameTyped = filter.filters.textFilter;
  const nameFilter = apiData.filter((p) => p.name.includes(nameTyped.name));

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      filters: {
        textFilter: { name: value },
      },
      [name]: value,
    });
  };

  const handleChangeNumeric = ({ target: { name, value } }) => {
    setfilterNumericInput({
      ...filterNumericInput,
      [name]: value,
    });
  };

  const valueFilters = () => {
    let dataFilters = apiData;
    filterNumericValues.forEach(({ comparison, column, value }) => {
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
    // setFilteredApiData(dataFilters);
  };

  useEffect(() => { valueFilters(); }, [filterNumericInput]);

  const handleSubmit = () => {
    setFilterNumericValues([
      filterNumericInput,
    ]);
    console.log('por favor me le');
  };

  return (
    <ApiContext.Provider
      value={ { nameFilter,
        filter,
        nameTyped,
        handleChange,
        filterNumericInput,
        handleChangeNumeric,
        handleSubmit,
      } }
    >
      { children }
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
