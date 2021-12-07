import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Trama.png';
import AboutUs from '../components/AboutUs';

const AboutUsPage = (props) => {
  const teamMembers = get(
    props,
    'data.allContentfulTeamMember.edges',
  );

  const aboutUsBanner = get(props, 'data.contentfulBanners');

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
      innerBackground={'#5ebff4'}
    >
      <AboutUs
        teamMembers={teamMembers}
        aboutUs={aboutUsBanner}
        cla
      />
    </Container>
  );
};

export default AboutUsPage;

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
  }
`;
