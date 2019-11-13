import React from 'react';
import axios from 'axios';
import './App.css';
import url from './url.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 104 };
  }

  async componentDidMount() {
    const response = await axios({
      url: url.api + "/information",
      method: 'get'
    });

    console.log(response);
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={url.assets + "/images/0006.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/AptimusPrimoo.js</code> and save to reload. {this.state.seconds}
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
    </div>);
  }
}

export default App;
