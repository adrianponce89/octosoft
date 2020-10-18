import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import Services from '../components/Services';

const OurServices = (props) => {
  const services = get(props, 'data.allContentfulService.edges');
  const {
    location: { hash },
  } = props;

  return (
    <Container background={`url(${BackgroundImage})`}>
      <Services
        services={services}
        selected={(hash && decodeURI(hash.slice(1))) || 'productions'}
        title="Our Services"
        subtitle="Learn about our departaments and the services they can
          provide to your business"
      />
    </Container>
  );
};

export default OurServices;

export const pageQuery = graphql`
  query OurServicesQuery {
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
  }
`;
