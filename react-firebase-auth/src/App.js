import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/config.js';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}

export default App;
