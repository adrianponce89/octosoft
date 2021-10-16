import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Container';
import UnderConstruction from '../components/UnderConstruction';
import BackgroundImage from '../assets/Trama.png';

const underConstructionPage = () => {
  const classes = useStyles();
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
    <Container
      background={`url(${BackgroundImage})`}
      innerBackground={'none'}
      className={classes.root}
    >
      <UnderConstruction imgUrl={url} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '25px 34px 50px',
    '@media (min-width: 1362px)': {
      maxWidth: '90%',
    },
  },
}));

export default underConstructionPage;
