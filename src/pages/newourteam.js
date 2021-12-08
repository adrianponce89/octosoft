import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import NewOurTeam from '../components/NewOurTeam/Index';

const NewOurTeamPage = (props) => {
  const teamMembers = get(
    props,
    'data.allContentfulTeamMember.edges',
  );
  return (
    <div styles={{ width: '100%', backgroundColor: '#F5F7F7' }}>
      <NewOurTeam teamMembers={teamMembers} />
    </div>
  );
};
export default NewOurTeamPage;

export const pageQuery = graphql`
  query OurTeamQuery {
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
          expertise {
            json
          }
        }
      }
    }
  }
`;
