import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

function Table() {
  const { apiData } = useContext(ApiContext);
  apiData.forEach((planet) => delete planet.residents);
  console.log(apiData);

  const tableData = apiData.map((planet) => (
    <tr key={ planet.name }>
      <td>{ planet.name }</td>
      <td>{ planet.rotation_period }</td>
      <td>{ planet.orbital_period }</td>
      <td>{ planet.diameter }</td>
      <td>{ planet.climate }</td>
      <td>{ planet.gravity}</td>
      <td>{ planet.terrain }</td>
      <td>{ planet.surface_water }</td>
      <td>{ planet.population }</td>
      <td>{ planet.films }</td>
      <td>{ planet.created }</td>
      <td>{ planet.edited }</td>
      <td>{ planet.url}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table-edit">
        <thead>
          <tr>
            <th className="table-items">Name </th>
            <th className="table-items">Rotation Period</th>
            <th className="table-items">Orbital Period</th>
            <th className="table-items">Diameter</th>
            <th className="table-items">Climate</th>
            <th className="table-items">Gravity</th>
            <th className="table-items">Terrain</th>
            <th className="table-items">Surface Water</th>
            <th className="table-items">Population</th>
            <th className="table-items">Films</th>
            <th className="table-items">Created</th>
            <th className="table-items">Edited</th>
            <th className="table-items">Url</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
