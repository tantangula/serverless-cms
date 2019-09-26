import React from 'react';
import './App.css';
import variables from './variables.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={variables.url + "/0006.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/AptimusPrimooooooooooo.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
