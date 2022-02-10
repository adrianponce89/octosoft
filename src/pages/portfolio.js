import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import Portfolio from '../components/Portfolio';
import BackgroundImage from '../assets/Trama.png';

<<<<<<< HEAD
const PortfolioPage = () => {
=======
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
          }
        }
      }
    }
  `);
>>>>>>> 53230dcf46bd7d6a79d20e3cb0e76a8f7eecc349

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