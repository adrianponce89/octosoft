require('dotenv').config({
  path: `.env.development`,
});

const contentfulConfig = {
  spaceId: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  );
}

module.exports = {
  siteMetadata: {
    title: 'Octosoft',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Octosoft Professionals',
        short_name: 'Octosoft',
        icon: 'src/assets/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://octosoftprofessionals.us1.list-manage.com/subscribe/post?u=81ad31ef8de1fda17fb10f392&amp;id=dcc733877d',
        timeout: 3500,
      },
    },
  ],
};
