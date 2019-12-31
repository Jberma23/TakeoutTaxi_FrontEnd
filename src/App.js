import React, { Component } from 'react';
import Login from "./components/Others/Login"
import './App.css';
import FeedContainer from "./components/Others/FeedContainer"
import CheckoutContainer from "./components/Orders/components/CheckoutContainer"
import DashBoard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import CreateAccount from "./components/Others/CreateAccount"
import cookie from 'react-cookies'
class App extends Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      username: "",
      role: 0,
      email: "",
      password: "",
    },
    existingUser: {
      email: "",
      password: ""
    },
    loading: true,
    currentUser: null,
    squareApplicationID: "",
    squareAccessKey: "",
    squareLocationId: "",
    apiKey: "",
    url: "http://localhost:3000/"
  }

  updateUser = (user) => {
    this.setState(
      {
        currentUser: user,
        loading: false,
        favoriteTrucks: user.favorites
      })
  }






  doFetch = (url, method, body, response) => {
    let options = {}
    if (body !== "") {
      options = {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json', token: cookie.load('jwt')
        },
        body: JSON.stringify({ body })
      }
    }
    else if (method == "GET") {
      options = {
        headers: { token: cookie.load('jwt') }
      }
    }
    else {
      options = {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json',
          token: cookie.load('jwt')
        }
      }
    }
    if (response) {
      return fetch(`${this.state.url + url}`, { options }).then(res => res.json())
    } else {
      return fetch(`${this.state.url + url}`, { options })
    }
  }

  handleResponse = (response, newState) => {
    this.setState({ newState })
  }



  componentDidMount() {
    if (cookie.load("jwt")) {
      this.doFetch("users/login", "POST", { user: { token: cookie.load('jwt') } }, false)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            alert("Incorrect Email or Password")
          }
        })
        .then(data => {
          if (data.authenticated) {
            cookie.save('jwt', data.token, { maxAge: 3600 })
            this.setState({ currentUser: data.user, favoriteTrucks: data.user.favorites })
          }
        })
        .catch((e) => console.error(e))
    }

    this.doFetch("locations", "GET", "", true)
      .then(response => {
        this.handleResponse(response, { apiKey: response[0], squareAccessKey: response[1], squareApplicationID: response[2], squareLocationId: response[3] })
      })
  }





  handleUserLogOut = (event) => {
    event.preventDefault()
    const r = window.confirm("Do you really want to Sign Out?")
    if (r === true) {
      this.doFetch("users/logout", "DELETE", "", false)
      cookie.remove('jwt')
      this.setState({ currentUser: null })
    }
  }


  handleCreateAccountSubmit = (event) => {
    event.preventDefault()
    this.doFetch("users", "POST", { user: this.state.newUser }, true)
      .then(response => {
        this.handleResponse(response, { currentUser: response, existingUser: { ...this.state.existingUser, email: response.email, password: response.password } },
          this.handleLoginSubmit())
      })
  }

  handleCreateAccountChange = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.id]: event.target.value
      }
    })
  }
  handleCreateAccountOwnerChange = (event) => {
    event.currentTarget.classList.length < 4 ?
      this.setState({
        newUser: {
          ...this.state.newUser,
          role: 1
        }
      }) :
      this.setState({
        newUser: {
          ...this.state.newUser,
          role: 0
        }
      })
  }

  handleLoginChange = (event) => {
    this.setState({
      existingUser: {
        ...this.state.existingUser,
        [event.target.id]: event.target.value
      }
    })
  }
  handleLoginSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      crossDomain: 'true',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.existingUser.email,
          password: this.state.existingUser.password,
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()

        } else {
          alert("Incorrect Email or Password")
        }
      })
      .then(data => {
        if (data.authenticated) {
          cookie.save('jwt', data.token, { maxAge: 3600 })
          this.setState({ currentUser: data.user, favoriteTrucks: data.user.favorites })
        }
        else {
          alert("Incorrect Email or Password")
        }
      }).catch((e) => console.error(e))
  }



  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" render={() => this.state.currentUser ? <Redirect to="/home" /> :

              <Login handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit} />} />
            <Route path="/register" render={() => <CreateAccount owner={this.state.owner} handleCreateAccountSubmit={this.handleCreateAccountSubmit} handleCreateAccountOwnerChange={this.handleCreateAccountOwnerChange} handleCreateAccountChange={this.handleCreateAccountChange} />} />
            <Route path="/home" render={() => this.state.currentUser ? <DashBoard apiKey={this.state.apiKey} user={this.state.currentUser} favoriteTrucks={this.state.favoriteTrucks} handleUserLogOut={this.handleUserLogOut} /> : <Redirect to="/login" />} />
            <Route path="/feed" render={() => this.state.currentUser ? <FeedContainer updates={this.state.updates} user={this.state.currentUser} /> : <Redirect to="/login" />} />
            <Route path="/orders" render={() => this.state.currentUser ? <CheckoutContainer squareApplicationID={this.state.squareApplicationID} squareAccessKey={this.state.squareAccessKey} squareLocationId={this.state.squareLocationId} /> : <Redirect to="/login" />} />

          </Switch>
        </Router>

      </div >
    )
  }
}



export default App;
