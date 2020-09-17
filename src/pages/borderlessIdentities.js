import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import BackgroundBanner from '../assets/BannerFinal.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BorderlessItems from '../components/BorderlessItems';

const styles = makeStyles({
  root: {
    width: '100%',
    background:
      'linear-gradient(180deg, rgba(9,90,121,1) 0%, rgba(36,234,237,1) 48%, rgba(255,187,39,0.9688993395209646) 85%, rgba(255,187,39,1) 89%)',
  },
  backgroundBaner: {
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '30%',
  },
  containerBorderlessItems: {
    overflow: 'hidden',
  },
  containerItems: {
    margin: 25,
    overflow: 'hidden',
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
    <Grid
      container
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Container transparent={'none'}>
        <Grid
          item
          xs={12}
          className={`${classes.backgroundBaner} ${classes.containerItems} `}
        ></Grid>
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
