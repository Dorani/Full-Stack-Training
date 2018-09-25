import React, { Component } from 'react';
import Projects from './components/projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects test="hello Seif"/>
      </div>
    );
  }
}

export default App;
