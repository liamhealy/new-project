import React, { Component } from 'react';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import { Switch, Route, withRouter } from 'react-router-dom';
 
class Main extends Component {

    userSignIn = () => {
        // const defaultUser = "liam";
        // this.props.history.push(`/${defaultUser}`);
        // return <Redirect to={`/${defaultUser}`} />
        this.props.signIn()
    }

    renderSignIn = () => {
        if (this.props.signedIn) {
            this.props.history.push("/liam")
        } else {
            return <SignIn userSignIn={this.userSignIn} />
        }
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
        console.log("in main")
        return (
            <div>
                <Switch>
                    <Route exact path="/:username" render={this.renderLanding} />
                    <Route path="/sign-in" render={this.renderSignIn} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);