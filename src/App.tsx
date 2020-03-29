import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AppHome from './scenes/Home';
import Project from './scenes/Project';
import ContentPage from './scenes/Home/Settings';
import { RouteComponentProps,BrowserRouter, withRouter } from "react-router-dom";


class App extends React.Component<RouteComponentProps, any> {
  constructor(props: RouteComponentProps) {
    super(props)
  }
  render() {
    return (
      <main>
        <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Project} />
          <Route path="/" component={AppHome} />
        </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default withRouter(App);


