import React, { Component } from 'react';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from '../actions/actions.js';

class Main extends Component {

	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.props.history.push(`${this.props.user.email.split('@')[0]}`)
		}
	}

	userSignIn = (email, password) => {
		this.props.signIn(email, password)
	}

	renderSignIn = () => {
		console.log('here', this.props)
		return <SignIn userSignIn={this.userSignIn} />
	}

	renderLanding = () => {
		return <Landing />
	}

	handleEmptyRoute = () => {
		if (this.props.signedIn) {
			this.props.history.push("/liam")
		} else {
			this.props.history.push("/sign-in")
		}
	} 

	render() {
		console.log('here')
		return (
			<div>
				<Switch>
					<Route exact path="/sign-in" render={this.renderSignIn} />
					<Route exact path="/:username" render={this.renderLanding} />
					<Route render={this.renderSignIn} />
				</Switch>
			</div>
		)
	}
}

function msp(state) {
	return {
		user: state.user,
		interface: state.interface
	}
}

export default connect(msp, {toggleDarkMode, signIn})(withRouter(Main));