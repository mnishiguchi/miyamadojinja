module.exports = {
  siteMetadata: {
    title: '海山道神社',
    description:
      '海山道開運稲荷さまは海でも山でも道をきり開いて開運を運んで下さる尊いお稲荷さまということで、お金やお客様を運べば商売繁盛、車や船を運んで交通安全・海上安全・旅行安全、筆を運んで受験合格・就職出世成功、その他縁結、子授、安産、病気平癒、借金取り等道を切り開いて都合よくお運びいただく開運諸願成就のあしどめ稲荷さまです。',
    address: '三重県四日市市海山道町1丁目62番地',
    siteUrl: process.env.SITE_URL,
    gmap:
      'https://www.google.com/maps/place/Miyamado+Shrine/@34.9430372,136.6211072,18z',
    phone: '059-345-5419',
    phoneIntl: '+81593455419',
    email: 'miyamado@m7.cty-net.ne.jp',
    author: 'mnishiguchi',
    facebook:
      'https://www.facebook.com/pages/%E6%B5%B7%E5%B1%B1%E9%81%93%E7%A5%9E%E7%A4%BE/442688119163715',
    instagram: 'https://www.instagram.com/miyamado_shrine/',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `海山道神社`,
        short_name: `miyamadojinja`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-pinterest-twitter-facebook`,
      options: {
        facebook: {
          // Set this to false if you want to disable facebook
          enable: true,
          // Set this to the querySelector string of the container element where you want to display facebook timeline and like button
          // If you do not define this, facebook timeline and like button will not work
          // Fox example: `.facebook-container` or `#.facebook-timeline`
          containerSelector: '.Facebook-timeline',
          // Set this to the facebook profile or facebook page name you want to use
          // If you do not define this, facebook timeline and like button will not work
          // Do not include `@` symbol here
          // https://www.facebook.com/%E6%B5%B7%E5%B1%B1%E9%81%93%E7%A5%9E%E7%A4%BE-137077743078473/
          profile:
            '%E6%B5%B7%E5%B1%B1%E9%81%93%E7%A5%9E%E7%A4%BE-137077743078473',
          // The pixel width of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 180 and Maximum allowed value is 500
          // If you leave this as null, the plugin will try to occupy all available container width
          width: null,
          // The pixel height of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 70
          // If you leave this as null, the plugin will try to occupy all available container height
          height: 2500,
          // Tabs to render i.e. timeline, events, messages. Use a comma-separated list to add multiple tabs, i.e. timeline, events.
          tabs: 'timeline, events, messages',
          // Hide cover photo in the header
          hideCover: true,
          // Show profile photos when friends like this, i.e. if you are logged in to Facebook, it will show the photos of your friends who have liked this page
          showFacepile: true,
          // Use the small header instead, i.e show a smaller cover photo
          smallHeader: false,
          // Try to fit inside the container width on page load
          // If the width of the parent element is bigger than the Page plugin's width it will maintain the value defined in width
          // No Dynamic Resizing - If you want to adjust the plugin's width on window resize, you manually need to rerender the plugin.
          adaptContainerWidth: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
