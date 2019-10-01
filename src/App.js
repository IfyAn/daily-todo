import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {
  render() { 
    return (
      <>
      <Dashboard />
      <Signup />
      </>
    );
  }
}

export default App;
