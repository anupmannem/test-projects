import React from 'react';
import Button from './bootstrap/button'

export default class App extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid text-xs-center"
        style={{ backgroundImage: 'url(img/debug_1.jpeg)', color: 'white' }}>
        <div className="container">
          <h1>Building React User Interfaces</h1>
          <p>with bootstrap and sass</p>
          <p><Button className="btn btn-primary" href="#" /></p>
          <p><Button className="btn btn-danger" /></p>
        </div>        
      </div>
    );
  }
}
