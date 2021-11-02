const path = require('path')


module.exports = {
  title: 'FinBox Developer Documentation',
  tagline: 'The central place for building your credit program',
  url: 'https://developer.redis.com',
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

    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },
    prism : {
      additionalLanguages: ['csharp', 'php', 'ruby','kotlin','java','groovy'],
      // theme: require("prism-react-renderer/themes/okaidia"),
      // darkTheme: require("prism-react-renderer/themes/dracula"),

    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'FinBox',
        src: '/src/public/finboxdocs.svg',
      },
      hideOnScroll: false,
      // items: [
      //   {
      //     to: '/create/rediscloud',
      //     activeBasePath: 'docs',
      //     label: 'Get started',
      //     position: 'right',
      //   },
      //   {
      //     href: 'https://launchpad.redis.com',
      //     label: 'Redis Launchpad',
      //     position: 'right',
      //   },
      //   {
      //     href: 'https://redis.com/try-free/',
      //     label: 'Try Free',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis Labs logo',
        src: 'img/redis_logo_red_white_rgb.svg',
        href: 'https://redis.com/', 
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create/rediscloud',
            },
            {
              label: 'Develop',
              to: '/develop/',
            },
            {
              label: 'Explore your data',
              to: '/explore/redisinsight/',
            },
            {
              label: 'Best Practices',
              href: 'https://redis.com/redis-best-practices/introduction/',
            },
            // {
            //   label: 'Tutorials',
            //   to: '#',
            // },
            // {
            //   label: 'Samples & Demos',
            //   to: '#',
            // },
            {
              label: 'Build with Redis Modules',
              href: '/howtos/redisearch/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redis.com/community/',
            },
            {
              label: 'Redis University',
              href: 'https://university.redis.com',
            },
            {
              label: 'Command Reference',
              href: 'https://redis.io/commands',
            },
            {
              label: 'How-tos & tutorials',
              to: '/howtos',
            },
            //   label: 'Use Cases',
            //   href: 'https://redis.com/solutions',
            // },
          ],
        },
      ],
   copyright: `Copyright: © ${new Date().getFullYear()} Redis. All rights reserved. Redis and the cube logo are registered trademarks of Redis Ltd.`, 
   },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
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
    'docusaurus-plugin-sass', path.resolve(__dirname, 'plugins', 'gtm') 
  ],
};
