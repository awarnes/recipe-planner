import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={Calendar}
        />
      </Router>
    );
  }
}

export default App;
