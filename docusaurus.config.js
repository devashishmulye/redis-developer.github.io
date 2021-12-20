const path = require('path')


module.exports = {
  title: 'FinBox Developer Documentation',
  tagline: 'The central place for building your credit program',
  url: 'https://docs.finbox.in',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'finbox-documentation', // Usually your GitHub org/user name.
  projectName: 'finbox-documentation', // Usually your repo name.
  customFields: {
    authors: {
      simon: {
        name: 'Simon Prickett',
        link: 'https://twitter.com/simon_prickett',
        title: 'Manager, Developer Advocacy',
        image: '/Users/finboxuser1/devashishwork/redis-developer.github.io/src/public/FinBox Dark logo@2x.png'
      },
      suze: {
        name: 'Suze Shardlow',
        link: 'https://twitter.com/SuzeShardlow',
        title: 'Developer Community Manager',
        image: 'profile_pic_suze_shardlow.jpg'
      }
    }
  },
  themeConfig: {
    zoomSelector: '.markdown img',
    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },
    prism : {
      additionalLanguages: ['csharp', 'php', 'ruby','kotlin','java','groovy'],
      theme: require("prism-react-renderer/themes/okaidia"),
      // darkTheme: require("prism-react-renderer/themes/dracula"),

    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'FinBox',
        src: '/img/finboxdocs.svg',
      },
      hideOnScroll: false,
      items: [
        {
          to: '/finbox-overview/',
          label: 'Home',
          position: 'left',
        },

        {
          to: '/bank-connect/',
          label: 'BankConnect',
          position: 'left',
        },
        {
          to: '/device-connect/',
          label: 'DeviceConnect',
          position: 'left',
        },
        {
          to: '/embedded-finance/',
          label: 'Embedded Finance Platform',
          position: 'left',
        },
    
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'FinBox Logo',
        src: 'img/FinBoxLight.png',
        href: 'https://finbox.in/', 
      },
      links: [
        {
          title: 'FinBox Product Suite',
          items: [
            {
              label: 'FinBox Embedded Finance Platform',
              href: 'https://finbox.in/products/embedded-finance',
            },
            {
              label: 'BankConnect',
              href: 'https://finbox.in/products/bank-connect/',
            },
            {
              label: 'DeviceConnect',
              to: 'https://finbox.in/products/device-connect/',
            },
            // {
            //   label: 'Best Practices',
            //   href: 'https://redis.com/redis-best-practices/introduction/',
            // },
            // {
            //   label: 'Tutorials',
            //   to: '#',
            // },
            // {
            //   label: 'Samples & Demos',
            //   to: '#',
            // },
            // {
            //   label: 'Build with Redis Modules',
            //   href: '/howtos/redisearch/',
            // },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Engineering Blog',
              href: 'https://medium.com/finbox',
            },
            {
              label: 'FinTech Blog',
              href: 'https://finbox.in/blog',
            },
            // {
            //   label: 'Command Reference',
            //   href: 'https://redis.io/commands',
            // },
            // {
            //   label: 'How-tos & tutorials',
            //   to: '/howtos',
            // },
            // {
            //   label: 'Use Cases',
            //   href: 'https://redis.com/solutions',
            // },
          ],
        },
      ],
   copyright: `Copyright: © ${new Date().getFullYear()} FinBox. All rights reserved.`, 
   },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    // announcementBar: {
    //   id: 'redisconf20201cfp', // Any value that will identify this message.
    //   content: '<p class="text">We\'re taking part in Hacktoberfest!</p> <a href="/hacktoberfest" class="btn">Join Us!</a>',
    // //  content: '<p class="text"></p> <a href="https://www.youtube.com/c/Redisinc/playlists?view=50&sort=dd&shelf_id=1" target="_blank" rel="noopener" class="btn"></a>',
    //   backgroundColor: '#fff', // Defaults to `#fff`.
    //   textColor: '#000', // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass', path.resolve(__dirname, 'plugins', 'gtm'),
    'plugin-image-zoom'
  ],
};
