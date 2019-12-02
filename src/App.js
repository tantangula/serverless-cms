import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import './App.css';
import url from './url.js';
import store from './redux/store';
import NumberBContainer from './components/NumberBContainer';
import NumberYContainer from './components/NumberYContainer';

class App extends React.Component {

  async componentDidMount() {
    const response = await axios({
      url: url.api + "/information",
      method: 'get'
    });

    console.log(response);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Router>
              <Switch>
                <Route exact path="/" component={NumberBContainer} />
                <Route path="/vari" component={NumberYContainer} />
              </Switch>
            </Router>
            <img src={url.assets + "/images/0006.png"} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/AptimusPrimoo.js</code> and save to reload.
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
      </Provider>
    );
  }
}

export default App;
