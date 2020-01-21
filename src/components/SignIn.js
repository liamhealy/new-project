import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Title from './Title';
import { connect } from 'react-redux';
import { toggleDarkMode, createAccount } from '../actions/actions.js';
import styled from 'styled-components';

class SignIn extends Component{

  state = {
    email: "",
    first_name: "",
    last_name: "",
    password: ""
  }
  
  proceedToMain = (event) => {
    event.preventDefault();
    event.persist();
    this.props.userSignIn(this.state);
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Page>
        <FormDiv>
            <Title>{'< manage-buddy >'}</Title>
          <FormPaper>
            <Form onSubmit={this.proceedToMain}>
              <FormHeader>Create an account</FormHeader>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </Form.Group>
              <FormButton variant="primary" type="submit">Submit</FormButton>
            </Form>
          </FormPaper>
        </FormDiv>
      </Page>
    );
  }
}

const FormHeader = styled.h1`
  font-weight: lighter;
  font-size: 4em;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const FormButton = styled.button`
  font-weight: lighter;
  font-size: 1em;
  padding: 10px 20px 10px 20px;
  background-color: #B8D8D8;
  border-style: solid;
  border-color: lightblue;
  border-radius: 5px;
`;

const Page = styled.div`
  background-color: white;
`;

const FormPaper = styled.div`
  background-color: #F7F7FF;
  padding: 50px;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  border-color: #343a40;
  text-align: center;
`;

// const Tile = styled.div`
//   background-color: #343a40;
//   padding: 5px;
//   border-radius: 10px;
//   margin-bottom: 10px;
// `;

function msp(state) {
  return {
    user: state.user,
    interface: state.interface
  }
}

export default connect(msp, { toggleDarkMode, createAccount })(SignIn)