import React from 'react';
import './App.css';
import Table from './components/Table';
import ApiProvider from './context/ApiProvider';
import Header from './components/Header';
import Inputs from './components/Inputs';

function App() {
  return (
    <div>
      <ApiProvider>
        <Header />
        <Inputs />
        <Table />
      </ApiProvider>
    </div>
  );
}

export default App;
