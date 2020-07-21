import React from 'react';
import RomanCalculator from './components/RomanCalculator';
import Table from './components/Table';
import './App.scss';

function App() {
  return (
    <div className="app">
      <RomanCalculator />
      <Table />
    </div>
  );
}

export default App;
