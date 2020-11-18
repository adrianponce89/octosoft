import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Background.png';
import HomeItems from '../components/HomeItems';
import Banners from '../components/Banners';
import HomeBanner from '../components/Home/Banner';
import OurPlans from '../components/Home/OurPlans';

const useStyles = makeStyles((theme) => ({
  containerCard: {
    padding: '3vh',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default (props) => {
  const descriptionLanding = get(
    props,
    'data.contentfulLandingDescription',
  );
  const banners = get(props, 'data.allContentfulBanners.edges');
  const homeItems = get(props, 'data.allContentfulHomeItem.edges');
  const plans = get(props, 'data.allContentfulPlan.edges');
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });
  return (
    <>
      <HomeBanner descriptionLanding={descriptionLanding} />
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
                banners.find(({ node }) => node.type === 'Plans').node
                  .image.file.url
              })`}
              title="Our Plans"
            />

            <OurPlans plans={plans} title={'Our Plans'} />
          </Grid>
        </Container>
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
