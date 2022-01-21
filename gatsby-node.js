const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve('./src/templates/Post.js');
    const ServicePortfolio = path.resolve('./src/components/ServicePortfolio/index.js')
    const ProjectTemplate = path.resolve('./src/templates/Project/index.js')
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  id
                  slug
                  title
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
            allContentfulService {
              edges {
                node {
                  newName
                  categories
                  newColor
                  category
                }
              }
            }
            allContentfulPortfolio {
              edges {
                node {
                  active
                  asset {
                    file {
                      url
                    }
                  }
                  category
                  subcategory
                  clientName
                  colorTitle
                  contentful_id
                  description {
                    description
                  }
                  linkProject
                  subtitle
                  title
                  titlePortfolioPage
                  type
                  banner {
                    file {
                      url
                    }
                  }
                  bannerDimensions
                  designAssets {
                    description
                    file {
                      url
                      details {
                        image {
                          height
                          width
                        }
                      }
                      fileName
                    }
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPost.edges;
        const services = result.data.allContentfulService.edges;
        const projects = result.data.allContentfulPortfolio.edges;

        services.forEach((service) => {
          createPage({
            path: `/portfolio/${service.node.newName}/`,
            component: ServicePortfolio,
            context: {
              newName: service.node.newName,
              categories: service.node.categories,
              newColor: service.node.newColor,
              categoryType: service.node.category,
            },
          });
        });
        posts.forEach((post) => {
          createPage({
            path: `/news/${post.node.slug}/`,
            component: PostTemplate,
            context: {
              slug: post.node.slug,
            },
          });
        });
        projects.forEach((project) => {
          createPage({
            path: `/portfolio/${project.node.category}/${project.node.contentful_id}/`,
            component: ProjectTemplate,
            context: {
              servicesInfo: services, 
              projectType: project.node.type,
              project: project.node,
            },
          });
        });
      }),
    );
  });
};
