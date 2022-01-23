import React from 'react'
import Title from '../../../components/Title'
import SoftwareContent from './SoftwareContent'
import Background from '../../../components/Background';

const SoftwareProject = ({project, categories}) => {

    return (
        <div>
            <Background />
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
