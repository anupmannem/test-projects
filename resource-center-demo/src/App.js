import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              Learn React
            </Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
