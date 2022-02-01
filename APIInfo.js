const data = useStaticQuery(graphql`
  query projects {
    allContentfulPortfolio {
      nodes {
        active
        category
        contentful_id
        subtitle
        title
        type
        banner {
          file {
            url
          }
        }
        bannerDimensions
        order
      }
    }
  }
`);

export const pageQuery = graphql`
  query BorderlessIdentitiesQuery {
    allContentfulBorderlessIdentitiesItem {
      edges {
        node {
          title
          link
          id
          photo {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export const query = graphql`
  query BrandPageQuery {
    allContentfulBrandLogoCard(sort: { fields: order }) {
      nodes {
        image {
          file {
            url
          }
        }
        description {
          description
        }
        order
        fbxMedia {
          file {
            contentType
            fileName
            url
          }
        }
      }
    }
    allContentfulBrandColorCard(sort: { fields: order }) {
      nodes {
        description {
          description
        }
        colors
        order
        title
      }
    }
    allContentfulBrandTextList(sort: { fields: order }) {
      nodes {
        title
        list1
        order
      }
    }
    allContentfulBrandText {
      nodes {
        title
        description {
          description
        }
      }
    }
    allContentfulBrandHeaderCard(sort: { fields: id, order: ASC }) {
      nodes {
        title
        description {
          description
          id
        }
      }
    }
  }
`;

export const pageQuery = graphql`
  query HomeQuery {
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
  }
`;

export const pageQuery = graphql`
  query PrivacyPolicyQuery {
    contentfulLegal(title: { eq: "PRIVACY POLICY" }) {
      content {
        id
        json
      }
    }
  }
`;

export const pageQuery = graphql`
  query NewsQuery {
    allContentfulPost {
      edges {
        node {
          id
          slug
          title
          linkFirm
          firm
          avatar {
            file {
              url
            }
          }
          recommended
          photo {
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
    allContentfulEvents(sort: { fields: date }) {
      edges {
        node {
          id
          link
          title
          date(formatString: "")
        }
      }
    }
  }
`;

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
          photoNoBackground {
            file {
              url
            }
          }
          octogone {
            file {
              url
            }
          }
          hover {
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

const {
  allContentfulAsset: {
    edges: [
      {
        node: {
          file: { url },
        },
      },
    ],
  },
} = useStaticQuery(graphql`
  {
    allContentfulAsset(
      filter: { title: { eq: "underconstruction" } }
    ) {
      edges {
        node {
          title
          file {
            url
          }
        }
      }
    }
  }
`);

const data = useStaticQuery(graphql`
  query services {
    allContentfulService {
      nodes {
        newColor
        newName
        newOrder
        category
        porfolioBackground {
          file {
            url
          }
        }
        porfolioBackgorundWide {
          file {
            url
          }
        }
        portfolioLink
      }
    }
  }
`);

export const pageQuery = graphql`
  query OurServicesQuery {
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
          title
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
