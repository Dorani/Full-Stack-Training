import React, { Component } from 'react';

class Projects extends Component {

  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log(project);
      });
    }
    return (
      <div className="Projects">
        <h1>Welcome to Project Management</h1>
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
