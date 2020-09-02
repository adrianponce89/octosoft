import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import BackgroundBanner from '../assets/BackgroundBanner.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BorderlessItems from '../components/BorderlessItems';

const styles = makeStyles({
  root: {},
  backgroundGlobal: {
    background: '#fff',
    height: '100%',
  },
  backgroundBaner: {
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '30%',
  },
  titleItems: { fontSize: '18px' },
});

const BorderlessIdentities = (props) => {
  const classes = styles();

  const borderlessItems = get(
    props,
    'data.allContentfulBorderlessIdentitiesItem.edges',
  );

  return (
    <Container
      background={`url(${BackgroundImage})`}
      transparent={'none'}
    >
      <div className={classes.root}>
        <Grid item md={12} className={classes.backgroundGlobal}>
          <Grid item md={12}>
            <div className={classes.backgroundBaner}></div>
          </Grid>
          <Grid container justify="center" md={12}>
            <h1 className={classes.titleItems}>
              What is Borderless Identities?
            </h1>
          </Grid>
          <Grid item>
            {borderlessItems.map(({ node }, i) => (
              <BorderlessItems
                background={`url(${node.photo.file.url})`}
                description={node.description.description}
                link={node.link}
                textAlign={i % 2 ? '' : 'left'}
                flexDirection={i % 2 ? '' : 'row'}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default BorderlessIdentities;

export const pageQuery = graphql`
  query BorderlessIdentitiesQuery {
    allContentfulBorderlessIdentitiesItem {
      edges {
        node {
          link
          id
          photo {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;
