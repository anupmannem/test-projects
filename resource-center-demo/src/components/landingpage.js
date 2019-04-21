import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React | NodeJs | Express | MongoDB</p>
              <div className="social-links">
                <a href="www.linkedin.com" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="www.github.com" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="www.twitter.com" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage