import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
