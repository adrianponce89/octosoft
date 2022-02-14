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
          }
          porfolioBackgorundWide {
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

  return (

      <Portfolio data={data} />
  );
};

export default PortfolioPage;