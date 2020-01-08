import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Cards from './Cards';

export default function Landing(props) {
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