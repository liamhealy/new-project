import React, { Component } from 'react';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    userSignIn = () => {
        const defaultUser = "liam";
        this.props.history.push(`/${defaultUser}`);
    }

    renderSignIn = () => {
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
                <Route path="/" render={this.renderSignIn} />
            </Switch>
        )
    }
}

export default withRouter(Main);