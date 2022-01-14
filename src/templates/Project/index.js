import React from 'react'
import DesignProject from './DesignTemplate'
import SoftwareProject from './SoftwareTemplate'

const ProjectTemplate = (props) => {
  const { projectType } = props.pageContext;

  console.log('projectType', projectType[0]);

  const generateTemplate = (type) => {
    switch (type) {
      case 'design':
        return <DesignProject />
      case 'software':
        return <SoftwareProject />
      default:
        return <SoftwareProject />
    }
  }
  return <div>{generateTemplate(projectType[0])}</div>;
};

export default ProjectTemplate
