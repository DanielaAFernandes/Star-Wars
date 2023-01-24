import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      textFilter: { name: '' },
      filterNumericValues: [],
    },
  });
  console.log(filter.filters.textFilter);

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
      ...nameTyped,
      [name]: value,
    });
    console.log(filter.filters.textFilter);
  };

  // const [textFilter, setTextFilter] = useState({
  //   name: '',
  // });
  const [filterNumericInput, setfilterNumericInput] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  // let dataFilters = apiData;

  // const nameFilter = apiData.filter((p) => p.name.includes(textFilter.name));

  // const handleChange = ({ target: { name, value } }) => {
  //   setTextFilter({
  //     ...textFilter,
  //     [name]: value,
  //   });
  // };

  const handleChangeNumeric = ({ target: { name, value } }) => {
    setfilterNumericInput({
      ...filterNumericInput,
      [name]: value,
    });
  };

  // filterNumericInput.forEach(({ comparison, column, value }) => {
  //   switch (comparison) {
  //   case 'maior que':
  //     dataFilters = apiData
  //       .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
  //     break;
  //   case 'menor que':
  //     dataFilters = apiData
  //       .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
  //     break;
  //   case 'igual a':
  //     dataFilters = apiData
  //       .filter((planet) => planet[column] === value);
  //     break;
  //   default:
  //     return dataFilters;
  //   }
  // });

  return (
    <ApiContext.Provider
      value={ { nameFilter,
        filter,
        // textFilter,
        nameTyped,
        handleChange,
        filterNumericInput,
        handleChangeNumeric,
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
