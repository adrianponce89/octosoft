import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import HeroImage from '../assets/header_cropped.png';
import BannerImage from '../assets/BannerFinal.png';
import BackgroundImage from '../assets/Background.png';
import OctoLogo from '../assets/logoHome.svg';
import HomeItems from '../components/HomeItems';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '15vh',
    height: '85vh',
    position: 'relative',
  },
  containerHead: {
    marginBottom: '8vh',
    display: 'flex',
    '@media (max-width: 560px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  logo: {
    width: 125,
    height: 125,
    filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.50))',
  },
  arrowDown: { fontSize: '5em', color: '#fff' },
  containerArrow: { position: 'absolute', bottom: 0 },
  textLogo: {
    cursor: 'default',
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 50,
    letterSpacing: 2,
    fontWeight: 'bold',
    textShadow: '0px 5px 4px rgba(0, 0, 0, 0.50)',
    '@media (max-width: 560px)': { textAlign: 'center' },
  },
  containerHeadCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    width: '65vw',
    '@media (max-width: 560px)': { width: '85vw' },
    paddingBottom: '15vh',
  },
  textHeadCard: {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 20,
    margin: 15,
  },
  containerCard: {
    padding: '3vh',
    justifyContent: 'center',
    width: '100%',
  },
  separatorBanner: {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '45vh',
    width: '100vw',
    filter: 'blur(4px)',
    position: 'absolute',
    left: 0,
  },
  containerBanner: {
    height: '45vh',
    width: '100%',
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const homeItems = get(props, 'data.allContentfulHomeItem.edges');
  const homeBorderlessItems = get(
    props,
    'data.allContentfulHomeBorderlessIdentities.edges',
  );

  return (
    <>
      <div className={classes.backgroundHead}>
        <Container transparent={'none'}>
          <Grid contantain justify="center">
            <Grid
              container
              direction="column"
              alignItems="center"
              xs={12}
            >
              <Grid
                container
                xs={12}
                alignItems="center"
                justify="center"
                className={classes.containerHead}
              >
                <Grid item sm={3}>
                  <OctoLogo className={classes.logo} />
                </Grid>
                <Grid item xs={11} sm={4}>
                  <Typography
                    variant="h1"
                    className={classes.textLogo}
                  >
                    {'Octosoft Professionals'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={9} className={classes.containerHeadCard}>
                <Typography
                  variant="body1"
                  className={classes.textHeadCard}
                >
                  {'Professional solutions in every field '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
          xs={12}
          justify="center"
          className={classes.containerArrow}
        >
          <a href="#work">
            <ExpandMoreIcon className={classes.arrowDown} />
          </a>
        </Grid>
      </div>
      <section id="work">
        <Container
          background={`url(${BackgroundImage})`}
          transparent={'none'}
          className={classes.containerCard}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={8}
          >
            {homeItems.map(({ node }) => (
              <HomeItems
                backgroundImage={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description.description}
              />
            ))}
            <div className={classes.containerBanner}>
              <div className={classes.separatorBanner}></div>
            </div>
            {homeBorderlessItems.map(({ node }) => (
              <HomeItems
                backgroundImage={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description.description}
              />
            ))}
            <div className={classes.containerBanner}>
              <div className={classes.separatorBanner}></div>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomeItem {
      edges {
        node {
          id
          link
          image {
            file {
              url
            }
          }
          title
          description {
            description
          }
        }
      }
    }
    allContentfulHomeBorderlessIdentities {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            file {
              url
            }
          }
          link
        }
      }
    }
  }
`;
