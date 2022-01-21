import React from 'react'
import DesignProject from './DesignTemplate'
import SoftwareProject from './SoftwareTemplate'

const ProjectTemplate = (props) => {
  const { projectType, project, servicesInfo } = props.pageContext;

  console.log('CULO', project)

  const filterSubCategories = () => {
    let categories = servicesInfo.filter((service)=> service.node.category === project.category)
    return categories[0].node.categories
  }

  const generateTemplate = (type) => {
    switch (type) {
      case 'design':
        return <DesignProject project={project} categories={filterSubCategories()} />
      case 'software':
        return <SoftwareProject project={project} categories={filterSubCategories()} />
      default:
        return <SoftwareProject project={project} categories={filterSubCategories()} />
    }
  }
  return <div>{generateTemplate(projectType[0])}</div>;
};

export default ProjectTemplate
