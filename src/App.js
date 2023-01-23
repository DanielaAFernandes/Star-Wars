import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import ApiProvider from './context/ApiProvider';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <span>Star Wars Project</span>
      <ApiProvider>
        <Table />
      </ApiProvider>
    </div>
  );
}

export default App;
