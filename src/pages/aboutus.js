import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import Banners from '../components/Banners';
import OurTeam from '../components/OurTeam';

const AboutUs = (props) => {
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
          category
          section
          socialMedia {
            github
            facebook
            behance
            instagram
            linkedin
            twitter
            web
          }
          photo {
            file {
              url
            }
          }
          fullPhoto {
            file {
              url
            }
          }
          name
          biography {
            json
          }
        }
      }
    }
  }
`;
