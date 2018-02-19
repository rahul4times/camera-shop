import React, { Component } from 'react';
import MainContainer from './components/main_container';
import Header from './components/header';
import Checkout from './components/checkout';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={ MainContainer } />
          <Route path="/checkout" component={ Checkout } />
        </div>
      </Router>
    );
  }
}

export default App;
