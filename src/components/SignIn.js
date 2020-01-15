import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from '../actions/actions.js';

function SignIn(props) {
  
  let errors = {
    email: false,
    password: false
  }

  console.log(props)
  
  const proceedToMain = (event) => {
    event.preventDefault();
    event.persist();
    if (event.target[0].value && event.target[1].value) {
      props.userSignIn(event.target[0].value, event.target[1].value);
    } else {
      if (!event.target[0].value) {
        errors.email = true;
      }
      if (!event.target[1].value) {
        errors.password = true;
      }
    }
  }

  return (
    <div>
      <h1>
        Sign in
      </h1>
      <form onSubmit={proceedToMain} noValidate>
        <input type="text" />
        <input type="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

function msp(state) {
  return {
    user: state.user,
    interface: state.interface
  }
}

export default connect(msp, { toggleDarkMode, signIn })(SignIn)