import React, { Component } from 'react';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import { Switch, Route } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { toggleDarkMode, signIn } from '../actions/actions';
 
class Main extends Component {

    userSignIn = () => {
        // const defaultUser = "liam";
        // this.props.history.push(`/${defaultUser}`);
        // return <Redirect to={`/${defaultUser}`} />
        this.props.signIn()
    }

    renderSignIn = () => {
        if (this.props.signedIn) {
            return <Redirect to="/liam" />
        }
        return <SignIn userSignIn={this.userSignIn} />
    }

    renderLanding = () => {
        return <Landing />
    }

    render() {
        return (
            <Switch>
                <Route exact path="/sign-in" render={this.renderSignIn} />
                <Route exact path="/:username" render={this.renderLanding} />
                {/* <Route path="/" render={this.renderSignIn} /> */}
            </Switch>
        )
    }
}

function msp(state) {
    return {
        signedIn: state.signedIn,
        darkMode: state.darkMode
    }
}

export default connect(msp, {toggleDarkMode, signIn})(withRouter(Main));