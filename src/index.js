import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// material-ui stuff
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, purple, green } from '@material-ui/core/colors';

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.js'; 

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: green,
    },
    status: {
        danger: purple,
    },
});

const store = createStore(reducer);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
