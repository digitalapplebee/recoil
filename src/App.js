import React from 'react';
import CharacterCounter from 'components/CharacterCounter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CharacterCounter />
      </header>
    </div>
  );
}

export default App;
