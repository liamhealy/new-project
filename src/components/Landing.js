import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from '../actions/actions.js';

function Landing(props) {
  console.log(props);
  return (
    <h1>
      Landing
    </h1>
  );
}

export default Landing;

// function msp(state) {
//   return {
//     signedIn: state.signedIn,
//     darkMode: state.darkMode
//   }
// }

// export default connect(msp, {toggleDarkMode, signIn})(Landing)