import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import Portfolio from '../components/Portfolio';
import BackgroundImage from '../assets/Trama.png';

const PortfolioPage = (props) => {
  const data = useStaticQuery(graphql`
    query services {
      allContentfulService{
          nodes {
            newColor
            newName
            newOrder
            category
            porfolioBackground{
              file {
                url
              }
            }
<<<<<<< HEAD
            porfolioBackgorundWide{
              file {
                url
              }
            }
            portfolioLink
          }
      }
      allContentfulBanners {
        edges {
          node {
            color
            title
=======
>>>>>>> feature/new-home
          }
        }
      }
    }
  `);

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerBackground={'tranparent'}
    >
      <Portfolio data={data} />
    </Container>
  );
};

export default PortfolioPage;
