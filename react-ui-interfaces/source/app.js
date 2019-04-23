import React from 'react';
import Button from './bootstrap/button'
import Jumbotron from './bootstrap/jumbotron'

export default class App extends React.Component {
  render() {
    return (
      <Jumbotron className="-fluid text-xs-center"
      style={{ backgroundImage: 'url(img/debug_1.jpeg)', color: 'white' }}>
      
        <h1>Building React User Interfaces</h1>
        <p>with bootstrap and sass</p>
        <p><Button className="-primary" href="#" /></p>
        <p><Button className="-danger-outline -sm" /></p>
            
      <Button className="-primary-outline -lg -block" disabled />
      </Jumbotron>

    );
  }
}
