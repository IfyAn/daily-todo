import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
//import Footer from './Footer';


class App extends Component {
  render() { 
    return (
      <BrowserRouter>
          <Navbar />
            <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            </Switch>
          {/* //<Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
