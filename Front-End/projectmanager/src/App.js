import React, { Component } from 'react';
import Projects from './components/projects'
import './App.css';

class App extends Component {
  //all our data goes into state
  construtor(){
    this.state = {
      projects: [
        {
          title: "B to B Engineer",
          category: "Web Design"
        },

        {
          title: "Social App",
          category: "Mobile"
        },

        {
          title: "Ecommerce",
          category: "Back End Engineer"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Projects test="hello Seif"/>
      </div>
    );
  }
}

export default App;
