module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "My Gatsby Site",
  },


  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              quality: 90
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `markdown`,
              path: `${__dirname}/src/articles`,
            },
          },
        ],
      },

    },
  ]


};
