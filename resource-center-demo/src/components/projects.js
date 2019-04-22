import React, { Component } from 'react'
import { 
  Tabs, 
  Tab, 
  Grid, 
  Cell, 
  Card, 
  CardTitle, 
  CardActions, 
  CardText,
  Button, 
  CardMenu, 
  IconButton } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={
            {color: '#fff', 
            height: '176px', 
            background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'
            }
          }>React Project #1</CardTitle>
          <CardText>
            Lorem Ipsom is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={
            {color: '#fff', 
            height: '176px', 
            background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'
            }
          }>React Project #2</CardTitle>
          <CardText>
            Lorem Ipsom is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={
            {color: '#fff', 
            height: '176px', 
            background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'
            }
          }>React Project #3</CardTitle>
          <CardText>
            Lorem Ipsom is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return <div><h1>This is Node.js</h1></div>
    } else if (this.state.activeTab === 2) {
      return <div><h1>This is Javascript</h1></div>
    } else if (this.state.activeTab === 3) {
      return <div><h1>This is HTML/CSS</h1></div>
    }
  }
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Node/Express</Tab>
          <Tab>Javascript</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects