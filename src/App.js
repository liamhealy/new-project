import React from 'react';
import Main from './containers/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from './actions/actions.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </div>
  );
}

function msp(state) {
  return {
    user: state.user,
    interface: state.interface
  }
}

export default connect(msp, {toggleDarkMode, signIn})(App);