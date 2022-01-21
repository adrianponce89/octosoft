import React from 'react'
import Title from '../../../components/Title'
import DesignContent from './DesignContent'

const DesignProject = ({project, categories}) => {

    return (
        <div>
            <Title
                name={project.titlePortfolioPage}
                categories={categories}
                subcategory={project.subcategory}
                color={project.colorTitle}
                size='75px'
                marginTop='80px'
            />
            <DesignContent project={project}/>
            
        </div>
    )
}

export default DesignProject
