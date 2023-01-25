// import React, { useContext } from 'react';
// import ApiContext from '../context/ApiContext';
// import Inputs from './Inputs';

// function FilterFunction() {
//   const { apiData, filter, filterFunction, setFilterFunction } = useContext(ApiContext);
//   const { numericFilter } = filter;

//   const valueFilters = () => {
//     let dataFilters = apiData;
//     numericFilter.forEach(({ comparison, column, value }) => {
//       switch (comparison) {
//       case 'maior que':
//         dataFilters = dataFilters
//           .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
//         break;
//       case 'menor que':
//         dataFilters = dataFilters
//           .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
//         break;
//       case 'igual a':
//         dataFilters = dataFilters
//           .filter((planet) => planet[column] === value);
//         break;
//       default:
//         return filterNumericValues.push(dataFilters);
//       }
//     });
//   };
//   return (
//     <div className="header">
//       <span className="title">Star Wars Project</span>
//     </div>
//   );
// }

// export default FilterFunction;
