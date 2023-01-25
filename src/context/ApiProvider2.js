// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import ApiContext from './ApiContext';

// function ApiProvider2({ children }) {
//   const [apiData, setApiData] = useState([]);
//   const [apiQuery, setApiQuery] = useState([]);
//   const [colunmsSearch, setColunmsSearch] = useState('population');
//   const [operator, setOperator] = useState('maior que');
//   const [numberValue, setNumberValue] = useState(0);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const response = await fetch('https://swapi.dev/api/planets');
//       const data = await response.json();
//       setApiData(data.results);
//       setApiQuery(data.results);
//     };
//     fetchApi();
//   }, []);

//   const handleFilterName = (name) => {
//     const filterApi = apiData
//       .filter((element) => element.name.toLowerCase().includes(name.toLowerCase()));
//     setApiQuery(filterApi);
//   };

//   const handleColunmsSearch = (value) => {
//     setColunmsSearch(value);
//   };

//   const handleOperatorSearch = (value) => {
//     setOperator(value);
//   };

//   const handleNumberValueSearch = (value) => {
//     setNumberValue(value);
//   };

//   const handleFilterClick = () => {
//     switch (operator) {
//     case 'maior que': {
//       const biggerFilter = apiQuery.filter((planet) => (
//         Number(planet[colunmsSearch]) > numberValue
//       ));
//       setApiQuery(biggerFilter);
//       break;
//     }
//     case 'menor que': {
//       const smallerFilter = apiQuery.filter((planet) => (
//         Number(planet[colunmsSearch]) < numberValue
//       ));
//       setApiQuery(smallerFilter);
//       break;
//     }
//     case 'igual a': {
//       const equalFilter = apiQuery.filter((planet) => (
//         Number(planet[colunmsSearch]) === Number(numberValue)
//       ));
//       setApiQuery(equalFilter);
//       break;
//     }
//     default:
//       break;
//     }
//   };

//   const values = {
//     apiData,
//     apiQuery,
//     handleFilterName,
//     colunmsSearch,
//     handleColunmsSearch,
//     operator,
//     handleOperatorSearch,
//     numberValue,
//     handleNumberValueSearch,
//     handleFilterClick,
//   };

//   return (
//     <ApiContext.Provider value={ values }>
//       { children }
//     </ApiContext.Provider>
//   );
// }

// ApiProvider2.propTypes = {
//   children: PropTypes.node,
// }.isRequired;

// export default ApiProvider2;
