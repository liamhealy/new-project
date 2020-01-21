import React from 'react';
import Navigation from './Navigation';
// import { connect } from 'react-redux';
// import { toggleDarkMode, signIn } from '../actions/actions.js';

class Landing extends React.Component {
  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}

export default Landing;

// function msp(state) {
//   return {
//     signedIn: state.signedIn,
//     darkMode: state.darkMode
//   }
// }

// export default connect(msp, {toggleDarkMode, signIn})(Landing)