
  
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import Portfolio from '../components/Portfolio';
import BackgroundImage from '../assets/Trama.png';

const PortfolioPage = (props) => {
  const data = useStaticQuery(graphql`
    query services {
      allContentfulService {
        nodes {
          newColor
          newName
          newOrder
          category
          porfolioBackground {
            file {
              url
            }
<<<<<<< HEAD
            porfolioBackgorundWide{
              file {
                url
              }
=======
          }
          porfolioBackgorundWide {
            file {
              url
>>>>>>> 9572fc98471b78f0fc6f5b6e13c8290a0233e9c9
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