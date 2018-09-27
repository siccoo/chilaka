import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Form from './Form';
import Mission from './Mission';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/App.css';
// import Users from './users/Users';
import { Switch, BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact={true} path='/home' component={Home} />
          <Route path='/header' component={Header} />
          <Route path='/form' component={Form} />
          <Route path='/mission' component={Mission} />

          {/* <Route path='/users' component={Users} /> */}
          <Footer />
          
          
        </Switch>

        {/* <Users/> */}
      </div>

    );
  }
}

export default App;
