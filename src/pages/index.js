import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Trama.png';
import HomeBanner from '../components/Home/Banner';
import DescriptionHome from '../components/DescriptionHome';
import Services from '../components/Home/Services';
import HomePlans from '../components/HomePlans';
import Clients from '../components/Home/Clients';
import CalendarButton from '../components/CalendarButton'
import { Link } from 'gatsby';


const useStyles = makeStyles((theme) => ({
  containerCard: {
    padding: '3vh',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundHome: {
    width: '100%',
    height: '310vh',
    opacity: 0.2,
    top: '100vh',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundImage: ({ BackgroundImage }) =>
      `url(${BackgroundImage})`,
    backgroundColor: '#FFF',
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: '100vw',
    zIndex: '-1',
  },
  home: {
    zIndex: 99,
  },
}));

export default (props) => {
  const [isActive, setIsActive] = useState(false);
  const [firstView, setFirstView] = useState(true);
  const descriptionLanding = get(
    props,
    'data.contentfulLandingDescription',
  );
  const servicesHome = get(props, 'data.allContentfulService');
  const portfolio = get(props, 'data.allContentfulPortfolio.nodes');
  const plans = get(props, 'data.allContentfulPlan.edges');
  const aboutUs = get(props, 'data.allContentfulAboutUs.nodes');
  const clients = get(props, 'data.allContentfulHomeClients');

  console.log('portfolioportfolio', portfolio);

  const handleScroll = () => {
    if (window.scrollY >= 300 && !isActive && firstView) {
      setIsActive(true);
      setFirstView(false);
    } else if (window.scrollY < 300 && isActive && !firstView) {
      setIsActive(false);
    } else if (!firstView) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);

  

  const classes = useStyles({
    BackgroundImage: BackgroundImage,
    isActive,
  });

  const clientHome = clients.edges[0].node

  return (
    <>
      <HomeBanner
        descriptionLanding={descriptionLanding}
        isActive={isActive}
      />
      <Link to="https://calendly.com/xoakin-r/interview">
        <CalendarButton />
      </Link>
      <section id="work">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.home}
        >
          <DescriptionHome content={aboutUs[0]} />
          <Services services={servicesHome} projects={portfolio} />
          <HomePlans plans={plans} />
          {clientHome && (
            <Clients
              title={clientHome.title}
              dataClients={clientHome.media}
            />
          )}
        </Grid>
      </section>
    </>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomeItem(sort: { fields: order }) {
      edges {
        node {
          id
          link
          order
          color
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
          color
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
    allContentfulService(sort: { fields: order }) {
      nodes {
        description
        order
      }
      edges {
        node {
          color
          id
          order
          title
          newOrder
          newName
          newColor
          category
          images {
            file {
              url
            }
          }
          content {
            json
          }
        }
      }
    }
    allContentfulHomeClients {
      edges {
        node {
          title
          media {
            title
            file {
              url
            }
          }
        }
      }
    }
    allContentfulAboutUs {
      nodes {
        image {
          file {
            url
          }
        }
        description {
          description
        }
      }
    }
    allContentfulPortfolio {
      nodes {
        active
        category
        contentful_id
        subtitle
        title
        type
        banner {
          file {
            url
          }
        }
        bannerDimensions
        order
      }
    }
  }
`;

