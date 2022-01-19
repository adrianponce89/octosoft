import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
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
            porfolioBackground{
              file {
                url
              }
            }
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
