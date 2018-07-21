import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10
    };
  }


  componentDidMount(){
    const rootRef = firebase.database().ref().child('speed');
    rootRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.speed}</p>
      </div>
    );
  }
}

export default App;
