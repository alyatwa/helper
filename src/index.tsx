import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import { BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline'
import newtheme from './theme';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <MuiThemeProvider theme={newtheme}>
    <CssBaseline />
     <App />
     </MuiThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
