const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve('./src/templates/Post.js');
    const ServicePortfolio = path.resolve('./src/components/ServicePortfolio/index.js')
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
            },
            allContentfulService {
              edges {
                node {
                  newName
                  categories
                  newColor
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
        services.forEach((service) => {
          createPage({
            path: `/portfolio/${service.node.newName}/`,
            component: ServicePortfolio,
            context: {
              newName: service.node.newName,
              categories: service.node.categories,
              newColor: service.node.newColor
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
      }),
    );
  });
};
