import React, { Fragment, useEffect, useState } from 'react';
import Background from '../../components/Background';
import SubCategories from '../../components/Services/SubCategories';
import { graphql } from 'gatsby';
import get from 'lodash/get';

const subcategories = (props) => {
  const design = get(props, 'data.allContentfulDesign.edges');
  const media = get(props, 'data.allContentfulMedia.edges');
  const marketing = get(props, 'data.allContentfulMarketing.edges');
  const operations = get(props, 'data.allContentfulOperations.edges');
  const dataScience = get(
    props,
    'data.allContentfulDataScience.edges',
  );
  const solutions = get(props, 'data.allContentfulItSolutions.edges');
  const web3 = get(props, 'data.allContentfulWeb3.edges');
  const software = get(
    props,
    'data.allContentfulSoftwareEngineering.edges',
  );

  let search = props.location.search;
  let limit = search.indexOf('%');
  search = search.toLowerCase();
  limit !== -1
    ? (search = search.slice(1, limit))
    : (search = search.slice(1, search.length + 1));

  return (
    <Fragment>
      <Background />
      <SubCategories
        design={design}
        media={media}
        marketing={marketing}
        operations={operations}
        dataScience={dataScience}
        solutions={solutions}
        web3={web3}
        software={software}
        search={search}
      />
    </Fragment>
  );
};

export const pageQuery = graphql`
  query SubCategoriesQuery {
    allContentfulDesign {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulMedia {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulMarketing {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulOperations {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulDataScience {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulItSolutions {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulWeb3 {
      edges {
        node {
          description
          color
          order
          octagon {
            file {
              url
            }
          }
          title
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSoftwareEngineering {
      edges {
        node {
          description
          color
          order
          description
          icon {
            file {
              url
            }
          }
          octagon {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default subcategories;
