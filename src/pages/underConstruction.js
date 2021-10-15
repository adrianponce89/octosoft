import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Container';
import UnderConstruction from '../components/UnderConstruction';

const underConstructionPage = () => {
  const {
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: { url },
          },
        },
      ],
    },
  } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "underconstruction" } }
      ) {
        edges {
          node {
            title
            file {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <UnderConstruction imgUrl={url} />
    </Container>
  );
};

export default underConstructionPage;
