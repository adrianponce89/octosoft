import React, { useState } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Typography, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Background.png';
import OctoLogo from '../assets/logoHome.svg';
import HomeItems from '../components/HomeItems';
import Banners from '../components/Banners';
import Plan from '../components/Plans';
import TypingAnimation from '../components/TypingAnimation';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';
import FondoSF1 from '../assets/FondoSF1.png';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: `url(${FondoSF1})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '10vh',
    minHeight: '50vh',
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
  },
  arrowDown: {
    fontSize: '5em',
    color: '#fff',
    margin: 0,
    padding: 0,
  },
  containerArrow: { position: 'absolute', bottom: -25 },
  textLogo: {
    cursor: 'default',
    fontSize: 50,
    lineHeight: 0.75,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  textLogoSub: {
    cursor: 'default',
    fontSize: 31,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
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
  button: {
    cursor: 'pointer',
    position: 'relative',
    margin: 5,
    padding: 0,
    '@media (max-width: 760px)': { order: '1' },
  },
  arrowLeft: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
  },
  arrowRigt: {
    position: 'absolute',
    top: 'auto',
    right: 'auto',
  },
  containPlans: {
    display: 'flex',
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

const words = ['Diverse', 'Other stuff', 'Way cooler'];

export default (props) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });
  console.log('des :>> ', descriptionLanding);
  return (
    <>
      <div className={classes.backgroundHead}>
        <Container
          innerBackground={'none'}
          innerPadding={'0'}
          partial
        >
          <Grid justify="center">
            <Grid container direction="column" alignItems="center">
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.containerHead}
              >
                <Grid item sm={2}>
                  <OctoLogo className={classes.logo} />
                </Grid>
                <Grid
                  item
                  container
                  xs={11}
                  sm={4}
                  justifyContent="center"
                >
                  <Typography
                    variant="h1"
                    className={classes.textLogo}
                  >
                    {'Octosoft'}
                  </Typography>
                  <Typography
                    variant="h2"
                    className={classes.textLogoSub}
                  >
                    {'Professionals'}
                  </Typography>
                </Grid>
              </Grid>
              <TypingAnimation words={words} />
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
            {/* <Banners
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
            ))} */}
            <Banners
              backgroundImage={`url(${
                banners.find(({ node }) => node.type === 'Plans').node
                  .image.file.url
              })`}
            />

            <div className={classes.containPlans}>
              <IconButton
                color="inherit"
                className={classes.button}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <RadioButtonUncheckedIcon />
                <ChevronLeftIcon className={classes.arrowLeft} />
              </IconButton>
              <div justify="center">
                <SwipeableViews
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {plansSort.map(({ type, plans }) => (
                    <>
                      <Typography
                        variant="h1"
                        className={classes.titleType}
                      >
                        {type}
                      </Typography>
                      <div
                        style={{
                          flexDirection: 'row',
                          display: 'flex',
                          flex: 1,
                        }}
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
                      </div>
                    </>
                  ))}
                </SwipeableViews>
              </div>
              <IconButton
                color="inherit"
                className={classes.button}
                onClick={handleNext}
                disabled={activeStep === plansSort.length - 1}
              >
                <RadioButtonUncheckedIcon />
                <ChevronRightIcon className={classes.arrowRigt} />
              </IconButton>
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
      backgroundImage {
        file {
          url
        }
      }
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
