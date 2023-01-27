import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterNumericInput, setfilterNumericInput] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filter, setFilter] = useState({
    filters: {
      textFilter: { name: '' },
      numericFilter: [],
    },
  });

  const [emptyArray, setEmptyArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState([
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setApiData(data.results);
      setFilteredPlanets(data.results);
    };
    fetchApi();
  }, []);

  filteredPlanets.forEach((planet) => delete planet.residents);
  const nameTyped = filter.filters.textFilter;
  const nameFilter = filteredPlanets.filter((p) => p.name.includes(nameTyped.name));

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      filters: {
        textFilter: { name: value },
      },
      [name]: value,
    });
  };

  return (
    <ApiContext.Provider
      value={ {
        apiData,
        setApiData,
        filterNumericInput,
        setfilterNumericInput,
        handleChange,
        setFilter,
        filter,
        nameTyped,
        nameFilter,
        emptyArray,
        setEmptyArray,
        filteredPlanets,
        setFilteredPlanets,
        selectedOption,
        setSelectedOption,
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
