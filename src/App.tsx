import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yo from './components/mark';
import SelectedStudentsScreen from './markview';

function App() {
  return (
    <div className="App">
      <Yo/>
      <SelectedStudentsScreen/>
    </div>
  );
}

export default App;
