import React from 'react';
import Main from './containers/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from './actions/actions.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Main />
      </div>
    </Router>
  );
}

function msp(state) {
  return {
    signedIn: state.signedIn,
    darkMode: state.darkMode
  }
}

export default connect(msp, {toggleDarkMode, signIn})(App);
