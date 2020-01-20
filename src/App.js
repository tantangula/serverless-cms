import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import FeedContainer from './components/FeedContainer';
import PostContainer from './components/PostContainer';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Router>
              <Switch>
                <Route exact path="/" component={FeedContainer} />
                <Route exact path="/:id" component={PostContainer} />
              </Switch>
            </Router>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
