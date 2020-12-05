import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Trama.png';
import Banners from '../components/Banners';
import OurTeam from '../components/OurTeam';

const styles = makeStyles((theme) => ({
  headTitle: {
    fontSize: 40,
    textAlign: 'center',
  },
  headSubTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  keypad: {
    margin: 'auto',
  },
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 50,
    boxShadow: theme.boxShadow,
  },
  highlightedButton: {
    boxShadow: `inset 0 0 0 2px #007bff, ${theme.boxShadow}`,
  },
  buttonIcon: {
    width: 32,
    height: 32,
    fill: (props) => props.color,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: '20px 0 20px 0',
    boxShadow: theme.boxShadow,
  },
  iconsDescriptions: {
    width: 250,
    height: 250,
    fill: (props) => props.fill,
    transition: 'fill 1.1s ease',
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  containerDescription: {
    background: '#ECECEC',
    padding: 25,
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  descriptionItem: {
    fontWeight: 'bolder',
  },
  backgroundAvatar: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  containerPartners: {
    background: '#ECECEC',
  },
  itemPartners: {
    margin: 24,
    padding: 25,
    background: '#5c5f5c',
    textDecoration: 'none',
  },
  itemPartnersLink: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const AboutUs = (props) => {
  const classes = styles(props);

  const teamMembers = get(
    props,
    'data.allContentfulTeamMember.edges',
  );

  const aboutUsBanner = get(props, 'data.contentfulBanners');

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
    >
      <Banners
        backgroundImage={`url(${aboutUsBanner.image.file.url})`}
        title={aboutUsBanner.title}
        description={aboutUsBanner.description.internal.content}
        right={true}
        color={aboutUsBanner.color}
        id="ourplans"
      />
      <OurTeam teamMembers={teamMembers} />
    </Container>
  );
};

export default AboutUs;

export const pageQuery = graphql`
  query AboutUsQuery {
    contentfulBanners(type: { eq: "AboutUs" }) {
      color
      image {
        file {
          url
        }
      }
      subTitle
      title
      type
      description {
        id
        internal {
          content
        }
      }
    }
    allContentfulTeamMember(sort: { fields: order }) {
      edges {
        node {
          id
          title
          section
          photo {
            file {
              url
            }
          }
          name
        }
      }
    }
  }
`;
