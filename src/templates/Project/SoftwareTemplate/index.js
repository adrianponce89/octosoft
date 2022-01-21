import React from 'react'
import Title from '../../../components/Title'
import SoftwareContent from './SoftwareContent'

const SoftwareProject = ({project, categories}) => {

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
            <SoftwareContent project={project}/>
        </div>
    )
}

export default SoftwareProject
