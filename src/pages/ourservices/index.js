import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Container from '../../components/Container';
import BackgroundImage from '../../assets/Trama.png';
import Services from '../../components/Services';

const OurServices = (props) => {
  const banners = get(props, 'data.allContentfulBanners.edges');
  const services = get(props, 'data.allContentfulService.edges');
  const category = get(props, 'data.allContentfulCategory.edges');
  const {
    location: { hash },
  } = props;

  const outServices = banners.find(
    ({ node }) => node.type === 'OurServices',
  ).node;

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
    >
      <Services
        services={services}
        selected={hash && decodeURI(hash.slice(1))}
        title={outServices.title}
        subtitle={outServices.subTitle}
        colorTitle={outServices.color}
        image={`url(${outServices.image.file.url})`}
        category={category}
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
          categories
          color
          id
          order
          title
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
    allContentfulBanners {
      edges {
        node {
          color
          image {
            file {
              url
            }
          }
          subTitle
          type
          title
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          title
          iconLarge {
            file {
              url
            }
          }
          description {
            description
          }
          icon {
            file {
              url
            }
          }
          idcategory
        }
      }
    }
  }
`;
