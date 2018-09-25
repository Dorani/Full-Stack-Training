import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>Welcome to Project Management</h1>
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
