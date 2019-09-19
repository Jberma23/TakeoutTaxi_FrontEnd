import React, { Component } from 'react';
import logo from './logo.svg';
import Login from "./components/Login"
import './App.css';
import Header from "./components/Header"
import DashBoard from './containers /Dashboard';
import {BrowserRouter as Router, Route} from "react-router-dom"
import CreateAccount from "./components/CreateAccount"

class App extends Component {
  state = { 
    user: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "", 
    },
    currentUser: null
   }

   handleCreateAccountSubmit=(event) => {

   }
   handleCreateAccountChange=(event) => {

  }

   handleLogin=(event)=> {
    console.log(event)
   }
  render() { 
    return (
    <div className="App">
    <Router>
    <Route exact strict path="/" render={() => <Login handleLogin={this.handleLogin}/>}/>
    <Route exact strict path="/login" render={() => <Login handleLogin={this.handleLogin}/>}/>
    <Route path="/register" render={() => <CreateAccount handleCreateAccountSubmit={this.handleCreateAccountSubmit} handleCreateAccountChange={this.handleCreateAccountChange}/>}/>
    <Route path="/home" component={DashBoard}/> 
    </Router>
   </div>  
  );
  }
}
 

export default App;
