import React, { Component } from 'react';
import ProjectItem from './projectItem'
class Projects extends Component {

  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log(project);

        return (
        //put projectItem component then pass each project as a prop
          <ProjectItem key={project.title} project={project}/>
        );
      });
    }
    return (
      <div className="Projects">
        <h1>Welcome to Project Management</h1>
        {projectItems}
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
