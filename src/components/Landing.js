import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Cards from './Cards';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from '../actions/actions.js';

function Landing(props) {
  console.log(props);
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
    	<Container maxWidth="lg" style={{marginTop: 10}}>
				<Cards />
			</Container>
    </React.Fragment>
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