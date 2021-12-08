import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import NewAboutUs from '../components/NewAboutUs/index';
const NewAboutUsPage = (props) => {
  const aboutUsBanner = get(props, 'data.allContentfulHomeItem');
  console.log(aboutUsBanner);
  return <NewAboutUs aboutUs={aboutUsBanner} />;
};

export default NewAboutUsPage;

export const pageQuery = graphql`
  query NewAboutUsQuery {
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
  }
`;
