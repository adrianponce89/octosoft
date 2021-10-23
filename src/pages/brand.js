import React from 'react';
import Brand from '../components/Brand';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import { graphql } from 'gatsby';
import get from 'lodash/get';

const BrandPage = (props) => {
  const logosBrand = get(
    props,
    'data.allContentfulBrandLogoCard.nodes',
  );

  const colorsBrand = get(
    props,
    'data.allContentfulBrandColorCard.nodes',
  );

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
    >
      <Brand logos={logosBrand} colors={colorsBrand} />
    </Container>
  );
};

export const query = graphql`
  query BrandPageQuery {
    allContentfulBrandLogoCard(sort: { fields: order }) {
      nodes {
        image {
          file {
            url
          }
        }
        description {
          description
        }
        order
      }
    }
    allContentfulBrandColorCard(sort: { fields: order }) {
      nodes {
        description {
          description
        }
        colors
        order
        title
      }
    }
  }
`;

export default BrandPage;
