// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smoothtalkers',
  tagline: 'Public Speaking & Interviewing Skills',
  url: 'https://smooth.l0l.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smoothtalker', // Usually your GitHub org/user name.
  projectName: 'Smooth Talkers Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/NeneWang/smoothdocs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NeneWang/smoothdocs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Smooth Talkers',
        logo: {
          alt: 'Interviewing and Public Speaking Club Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
          { to: '/resources/intro', label: 'Resources', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://zoom.us/my/afontenelle',
            label: 'Zoom',
            position: 'right',
          },
          {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSc760joQhO5pSklci85Lkxj9Ml4xeZel4HndROHPJQtHnPrVg/viewform?usp=sf_link',
            label: 'RSVP',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social Media',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/bcsmoothtalkers/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/bcsmoothtalkers/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join us in Whatsapp (Primary Community)',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSe4Wuk8jmYNbVxvNeTISU94DKUnH7T2yk1Nl0yYgRgyPL_syQ/viewform?usp=sf_link',
              },
              {
                label: "Discord",
                href: "https://discord.gg/75mRgGT8sn"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
