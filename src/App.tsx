import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './scenes/Home';
import { RouteComponentProps, withRouter } from "react-router-dom";


 class App extends React.Component<RouteComponentProps, any> {
  constructor(props: RouteComponentProps) {
    super(props)
 }
render() {
  return (
    <main>
      <Home />
    </main>
  );
}}

export default withRouter(App);
  

