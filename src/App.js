import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import NewProject from './components/NewProject';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  state = {
    loging: false,
    logingErr: false,
    signupLoading: false,
    signupLoadingErr: false,
    creating: false,
    creatingErr: false,
    userDetails: '',
    todos: null
  }

  handleParentStateChange = (property, value) =>{
    this.setState({[property]: value});
  }

  handleParentStateChangeAsync = (fn) =>{
    this.setState(fn);
  }

  render() { 
    return (
      <div className='app'>

        <Switch>
          <Route exact path='/signup' render={({history})=> (
            <Signup 
              signupLoading= {this.state.signupLoading}
              signupLoadingErr= {this.state.signupLoadingErr}
              handleParentStateChange= {this.handleParentStateChange}
              history= {history}
            />
          )} />

          <Route exact path='/' render={({history})=> (
            <Signin 
              changeParentState = {this.handleParentStateChange} 
              progress = {this.state.loging}
              handlelogingErr = {this.state.logingErr}
              changeUrlPath = {history}
            />
          )} />

          <Route exact path='/home' render={ ({ history })=> (
            <Home 
            userDetails={this.state.userDetails} 
            todos = {this.state.todos}
            handleParentStateChange={this.handleParentStateChange} 
            handleParentStateChangeAsync={this.handleParentStateChangeAsync}
            history={history}
            />
          )} />

          <Route exact path='/create-project' render={ ({ history })=> (
            <NewProject 
            creating={this.state.creating}
            handleParentStateChange={this.handleParentStateChange}
            userDetails={this.state.userDetails}
            history={history}
            />
          )} />

          <Route exact path='*' render={ ()=> (
            <PageNotFound />
          )} />
        </Switch>
      </div>
      
    );
  }
}

export default App;
