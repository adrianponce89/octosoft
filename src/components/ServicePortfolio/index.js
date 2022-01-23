import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from '../../assets/Trama.png';
import Container from '../Container';
import ServicePortfolioGrid from './servicePortfolioGrid'
import ServicePortfolioTitle from './servicePortfolioTitle'

const Pepe = (props) => {
  const [projectsToShow, setProjectsToShow] = useState([])

  const { newName, categories, newColor, categoryType } = props.pageContext

  const data = useStaticQuery(graphql`
    query projects {
      allContentfulPortfolio {
        nodes {
          active
          category
          contentful_id
          subtitle
          title
          type
          banner {
            file {
              url
            }
          }
          bannerDimensions
          order
        }
      }
    }
  `);

  const allProjects = data.allContentfulPortfolio.nodes

  useEffect(() => {
    const filteredProjects = allProjects.filter(project => project.category === categoryType)
    filteredProjects.sort(function (a, b) {
      return a.order - b.order;
    });
    setProjectsToShow(filteredProjects);
  }, [])

  return (
    <div>
      <Container
        background={`url(${BackgroundImage})`}
        innerBackground={'tranparent'}
      >
        <ServicePortfolioTitle
          name={categoryType}
          categories={categories}
          color={newColor}
        />
        <ServicePortfolioGrid categoryType={categoryType} portfolio={projectsToShow} />
      </Container>
    </div>
  );
}

export default Pepe
