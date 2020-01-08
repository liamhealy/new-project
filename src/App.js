import React from 'react';
import Main from './containers/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

export default App;
