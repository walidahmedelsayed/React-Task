import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './Components/HomeComponent';
import Users from './Components/UsersComponent';
import About from './Components/AboutComponent';
import Logo from './Images/github.png';

class App extends Component {
  render() {
    return (
      <Router>
         <div className="container">
            <h1 className="badge badge-danger">My React Task</h1>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="https://github.com/walidahmedelsayed/React-Task" target="_blank">
                <img src={Logo} width="30" height="30" alt="Task Github Repo"/>
              </a>
              <Link to="/" className="navbar-brand">My Task</Link>
              
               <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/users" className="nav-link">Users</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                </ul>
             
            </nav>
            <Route path="/"  exact component={Home}/>
            <Route path="/users" component={Users}/>
            <Route path="/about" component={About}/>            
         </div>
      </Router>
    );
  }
}

export default App;
