import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid text-xs-center"
        style={{ backgroundImage: 'url(img/debug_1.jpeg)', color: 'white' }}>
        <div className="container">
          <h1>Building React User Interfaces</h1>
          <p>with bootstrap and sass</p>
          <p>
            <a className="btn btn-primary" href="#">
              Discover things.
            </a>
          </p>
        </div>
      </div>
    );
  }
}
