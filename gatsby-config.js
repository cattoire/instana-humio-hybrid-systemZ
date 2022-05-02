module.exports = {
  siteMetadata: {
    title: 'Instana',
    description: 'A Gatsby theme for the carboThink Lab 1201 - Using Instana to achieve AI-enhanced enterprise observability—including the mainframen design system',
    keywords: 'Think2022',
  },
  pathPrefix: `/instana-humio-hybrid-systemZ`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Think Lab 1201 - Using Instana to achieve AI-enhanced enterprise observability—including the mainframe',
        icon: 'src/images/favicon.svg',
        short_name: 'Instana',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
