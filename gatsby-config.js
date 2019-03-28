const config = require('./site-config.json')

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    title: config.title,
    description: config.description,
    footer: config.footer,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-normalize-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/assets/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
  ],
}
