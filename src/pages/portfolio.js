import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Container';
import Portfolio from '../components/Portfolio';
import BackgroundImage from '../assets/Trama.png';

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query Portfolio {
      allContentfulPortfolio {
        edges {
          node {
            titlePortfolioPage
            colorTitle
            description {
              description
            }
          }
        }
      }
    }
  `);
  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
      innerBackground={'#93D6C3'}
    >
      <Portfolio data={data} />
    </Container>
  );
};

export default PortfolioPage;
