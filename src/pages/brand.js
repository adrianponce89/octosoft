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

  const titlesBrand = get(
    props,
    'data.allContentfulBrandHeaderCard.nodes',
  );

  const colorsBrand = get(
    props,
    'data.allContentfulBrandColorCard.nodes',
  );

  const identityGuidelines = get(
    props,
    'data.allContentfulBrandTextList.nodes',
  );

  const legalDisclaimer = get(
    props,
    'data.allContentfulBrandText.nodes[0]',
  );

  console.log(titlesBrand);
  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
    >
      <Brand
        logos={logosBrand}
        colors={colorsBrand}
        identityInfo={identityGuidelines}
        legalInfo={legalDisclaimer}
        titles={titlesBrand}
      />
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
        fbxMedia {
          file {
            contentType
            fileName
            url
          }
        }
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
    allContentfulBrandTextList(sort: { fields: order }) {
      nodes {
        title
        list1
        order
      }
    }
    allContentfulBrandText {
      nodes {
        title
        description {
          description
        }
      }
    }
    allContentfulBrandHeaderCard(sort: { fields: id, order: ASC }) {
      nodes {
        title
        description {
          description
          id
        }
      }
    }
  }
`;

export default BrandPage;
