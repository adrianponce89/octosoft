import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BorderlessBackground from '../assets/BorderlessBackground.jpg';
import BackgroundBanner from '../assets/BannerFinal.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BorderlessItems from '../components/BorderlessItems';
import LogoBorderlessIdentities from '../assets/logoBI.svg';

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    background: `url(${BorderlessBackground})`,
    backgroundColor:
      'linear-gradient(180deg, rgba(9,90,121,1) 0%, rgba(36,234,237,1) 48%, rgba(255,187,39,0.97) 85%, rgba(255,187,39,1) 89%)',
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  },
  backgroundBaner: {
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '30%',
    position: 'relative',
    boxShadow: theme.boxShadow,
    borderRadius: `0 0 ${theme.borderRadius} ${theme.borderRadius}`,
  },
  LogoBorderlessIdentities: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: '19.31%',
    height: '26.1%',
  },
  containerBorderlessItems: {
    overflow: 'hidden',
  },
  containerItems: {
    margin: 25,
    overflow: 'hidden',
    boxShadow: theme.boxShadow,
    borderRadius: theme.borderRadius,
  },
  titleItems: { fontSize: '18px' },
}));

const BorderlessIdentities = (props) => {
  const classes = styles();

  const borderlessItems = get(
    props,
    'data.allContentfulBorderlessIdentitiesItem.edges',
  );
  return (
    <Grid
      container
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Container innerBackground={'rgba(255,255,255,0.75)'}>
        <Grid item xs={12} className={`${classes.backgroundBaner}`}>
          <LogoBorderlessIdentities
            className={classes.LogoBorderlessIdentities}
          />
        </Grid>
        <Grid
          container
          xs={12}
          className={classes.containerBorderlessItems}
        >
          {borderlessItems.map(({ node }, i) => (
            <Grid item className={classes.containerItems}>
              <BorderlessItems
                background={`url(${node.photo.file.url})`}
                title={node.title}
                description={node.description.description}
                link={node.link}
                flexDirection={i % 2 ? '' : 'row'}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default BorderlessIdentities;

export const pageQuery = graphql`
  query BorderlessIdentitiesQuery {
    allContentfulBorderlessIdentitiesItem {
      edges {
        node {
          title
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
