import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  // const [queryData, setQueryData] = useState([]);
  const [filterNumericInput, setfilterNumericInput] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: 0,
  }]);
  const [filter, setFilter] = useState({
    filters: {
      textFilter: { name: '' },
      numericFilter: [],
    },
  });

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

  // const handleChangeNumeric = ({ target: { name, value } }) => {
  //   setfilterNumericInput({
  //     ...filterNumericInput,
  //     [name]: value,
  //   });
  // };

  return (
    <ApiContext.Provider
      value={ {
        apiData,
        setApiData,
        // setTextFilter,
        filterNumericInput,
        setfilterNumericInput,
        handleChange,
        setFilter,
        filter,
        nameTyped,
        nameFilter,
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
