import React from 'react'

export default class Button extends React.Component {
  render() {
    return(
      <a className={this.props.className} href={this.props.href} >
        Discover things.
      </a>
    )
  }
}