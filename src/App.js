import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'


class App extends Component {
  render() { 
    return (
      <>
      <h1>Daily Tasks</h1>
      <Signup />
      </>
    );
  }
}

export default App;
