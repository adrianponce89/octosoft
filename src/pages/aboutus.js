import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import AvatarTeam from '../components/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Background.png';
import Services from '../components/Services';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
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
    boxShadow:
      '0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  highlightedButton: {
    boxShadow:
      'inset 0 0 0 2px #007bff, 0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
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
    boxShadow:
      '0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
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
});

const AboutUs = (props) => {
  const classes = styles(props);

  const services = get(props, 'data.allContentfulService.edges');
  const partners = get(props, 'data.allContentfulPartner.edges');
  const teamMembers = get(
    props,
    'data.allContentfulTeamMember.edges',
  );

  return (
    <Container background={`url(${BackgroundImage})`}>
      <Services
        services={services}
        selected={'Octosoft'}
        title="The Octosoft Team"
        subtitle="Learn about our departaments and how they can help you and
        your company."
      />

      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Team</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and how they can help you and
          your company.
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center">
        {teamMembers.map(({ node }) => (
          <AvatarTeam
            name={node.name}
            background={`url(${node.photo.file.url})`}
          />
        ))}
      </Grid>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Partners</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and how they can help you and
          your company.
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.containerPartners}
        >
          {partners.map(({ node }) => (
            <Grid container md={4} justify="center">
              <Grid
                container
                justify="center"
                alignContent="center"
                wrap
                className={classes.itemPartners}
              >
                <a
                  className={classes.itemPartnersLink}
                  href={node.link}
                >
                  {node.title}
                </a>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;

export const pageQuery = graphql`
  query AboutUsQuery {
    allContentfulService(sort: { fields: order }) {
      edges {
        node {
          color
          id
          order
          title
          content {
            json
          }
        }
      }
    }
    allContentfulPartner {
      edges {
        node {
          title
          link
          id
        }
      }
    }
    allContentfulTeamMember {
      edges {
        node {
          name
          id
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
