import React, { Component } from 'react';
import '../stylesheets/App.css';

import Container from './Container';

class App extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      bgColor: '#111'
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  randomColorPick() {
    const bgColor = '#' + Math.random().toString(16).slice(2, 8);
    this.setState({ bgColor });
  }
  
  handleClick(event) {
    event.preventDefault();
    this.randomColorPick();
  }
  render() {
  let style = {
    backgroundColor: this.state.bgColor,
  }

    return (
      <div className="App" style={style} >
        <Container 
          onClick={this.handleClick}
          color={this.state.bgColor} />
      </div>
    );
  }
}

export default App;
