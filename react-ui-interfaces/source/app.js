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
          <p><Button className="-primary" href="#" /></p>
          <p><Button className="-danger-outline -sm" /></p>
        </div>        
        <Button className="-primary-outline -lg -block" disabled />
      </div>
    );
  }
}
