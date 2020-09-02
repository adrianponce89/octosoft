const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve('./src/templates/Post.js');
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
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPost.edges;
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
