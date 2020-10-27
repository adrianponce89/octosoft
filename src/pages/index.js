import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../assets/header_cropped.png';
import BackgroundImage from '../assets/Background.png';
import OctoLogo from '../assets/logoHome.svg';
import HomeItems from '../components/HomeItems';
import Banners from '../components/Banners';
import Plan from '../components/Plans';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '10vh',
    height: '85vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
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
    '@media (max-width: 560px)': { width: '85vw', marginBottom: 25 },
  },
  textHeadCardTitle: {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
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
  containerPlans: { paddingTop: '2em' },
  titleType: {
    fontFamily: 'Lato',
    fontSize: '38px',
    marginTop: '38px',
    textAlign: 'center',
  },
}));

const SortPlans = (plans) => {
  let sortPlans = [];
  const titleTypeSet = new Set();

  plans.forEach((plan) => {
    titleTypeSet.add(plan.node.type);
  });

  titleTypeSet.forEach((value) => {
    sortPlans.push({
      type: value,
      plans: plans.filter((p) => p.node.type === value),
    });
  });

  return sortPlans;
};

export default (props) => {
  const classes = useStyles();
  const descriptionLanding = get(
    props,
    'data.contentfulLandingDescription',
  );
  const banners = get(props, 'data.allContentfulBanners.edges');
  const homeItems = get(props, 'data.allContentfulHomeItem.edges');
  const homeBorderlessItems = get(
    props,
    'data.allContentfulHomeBorderlessIdentities.edges',
  );
  const plans = get(props, 'data.allContentfulPlan.edges');
  const plansSort = SortPlans(plans);
  return (
    <>
      <div className={classes.backgroundHead}>
        <Container innerBackground={'none'}>
          <Grid justify="center">
            <Grid container direction="column" alignItems="center">
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.containerHead}
              >
                <Grid item sm={3}>
                  <OctoLogo className={classes.logo} />
                </Grid>
                <Grid item container xs={11} sm={4}>
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
                  className={classes.textHeadCardTitle}
                >
                  {descriptionLanding.title}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textHeadCard}
                >
                  {`${descriptionLanding.description}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
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
          innerBackground={'none'}
          className={classes.containerCard}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
          >
            {homeItems.map(({ node }) => (
              <HomeItems
                backgroundImage={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description.description}
                link={node.link}
              />
            ))}
            <Banners
              backgroundImage={`url(${
                banners.find(({ node }) => node.type === 'Borderless')
                  .node.image.file.url
              })`}
            />
            {homeBorderlessItems.map(({ node }) => (
              <HomeItems
                backgroundImage={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description.description}
                link={node.link}
              />
            ))}
            <Banners
              backgroundImage={`url(${
                banners.find(({ node }) => node.type === 'Plans').node
                  .image.file.url
              })`}
            />
            <Grid item container justify="center" xs={12}>
              {plansSort.map(({ type, plans }) => (
                <>
                  <Typography
                    variant="h1"
                    className={classes.titleType}
                  >
                    {type}
                  </Typography>
                  <Grid
                    container
                    spacing={7}
                    justify="space-around"
                    direction="row"
                    className={classes.containerPlans}
                  >
                    {plans.map(({ node }) => (
                      <Plan
                        imagePlan={`url(${node.image.file.url})`}
                        title={node.title}
                        description={node.description}
                        amount={node.amount}
                        link={node.link}
                      />
                    ))}
                  </Grid>
                </>
              ))}
            </Grid>
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
    allContentfulPlan(sort: { fields: order }) {
      edges {
        node {
          id
          amount
          type
          order
          link
          description {
            json
          }
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
    contentfulLandingDescription {
      description
      title
    }
    allContentfulBanners {
      edges {
        node {
          image {
            file {
              url
            }
          }
          type
        }
      }
    }
  }
`;
