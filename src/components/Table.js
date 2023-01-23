import React, { useContext, useState } from 'react';
import ApiContext from '../context/ApiContext';

function Table() {
  const { apiData } = useContext(ApiContext);
  const [textFilter, setTextFilter] = useState('');
  apiData.forEach((planet) => delete planet.residents);

  const nameFilter = apiData.filter((letter) => letter.name.includes(textFilter));

  const tableData = nameFilter.map((planet) => (
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
      <input
        className="name-filter"
        type="text"
        data-testid="name-filter"
        name="name"
        id="name-filter"
        value={ textFilter.name }
        onChange={ (e) => setTextFilter(e.target.value) }
      />
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
