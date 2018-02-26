import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animation1: false
    }
  }
  render() {
    return (
      <div className='App'>
        <nav className='nav'></nav>
        <br/>
        <div className='square'></div>
        <br/>
        <div onClick={() => this.setState({ animation1: !this.state.animation1 })} 
          className={this.state.animation1 ? 'chameleon animation1' : 'chameleon'}>
        </div>
        <br/>
        <div className='spin'></div>
      </div>
    );
  }
}

export default App;
