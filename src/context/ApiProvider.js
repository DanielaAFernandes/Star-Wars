import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  // const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setApiData(data.results);
    };
    fetchApi();
  }, []);

  // const setFilter = apiData.filter((letter) => letter.name.includes(textFilter));
  // console.log(setFilter[0].name);

  // const setFilter = () => {
  //   setApiData({
  //     ...apiData.filter((letter) => letter.name.startsWith(letter.toUpperCase()))
  //       .map((letter) => letter.name),
  //   });
  //   return apiData;
  // };
  // console.log(Object.values(apiData.name));

  // const handleChange = (event) => {
  //   setTextFilter({
  //     ...textFilter,
  //     [event.target.name]: event.target.value,
  //   });
  //   setFilter();
  // };
  return (
    <ApiContext.Provider value={ { apiData } }>
      {/* <input
        className="name-filter"
        type="text"
        data-testid="name-filter"
        name="nameFilter"
        id="name-filter"
        // value={ textFilter.name }
        // onChange={ handleChange }
      /> */}
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
