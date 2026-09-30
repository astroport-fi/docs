// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/dracula');
// @ts-ignore
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const theme = require("shiki/themes/nord.json");
const { remarkCodeHike } = require("@code-hike/mdx");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Astroport Docs",
  tagline: "Build the future of Astroport",
  url: "https://docs.astroport.fi",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "astroport-fi", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   beforeDefaultRemarkPlugins: [
        //     [remarkCodeHike, { theme }],
        //   ],
        //   routeBasePath: 'docs',
        //   path: 'docs',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   lastVersion: 'current',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              // lineNumbers: true,
              theme,
            },
          ],
        ],
        id: "overview",
        path: "docs/overview",
        routeBasePath: "docs/overview",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/astroport-fi/docs/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              // lineNumbers: true,
              theme,
            },
          ],
        ],
        id: "learn",
        path: "docs/learn",
        routeBasePath: "docs/learn",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/astroport-fi/docs/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              lineNumbers: true,
              theme,
            },
          ],
        ],
        id: "govern",
        path: "docs/govern",
        routeBasePath: "docs/govern",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/astroport-fi/docs/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              lineNumbers: true,
              theme,
            },
          ],
        ],
        id: "develop",
        path: "docs/develop",
        routeBasePath: "docs/develop",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/astroport-fi/docs/blob/master",
      },
    ],
  ],

  themes: ["mdx-v2"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "AFZKMUVK8B",

        // Public API key: it is safe to commit it
        apiKey: "906baded98c00e9cdba3ad78d1e8ac29",

        indexName: "astroport",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },

      colorMode: {
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          // hideable: true,
        },
      },
      navbar: {
        items: [
          {
            to: "/docs/overview/astroport-onboarding/astroport-onboarding-intro", // ./docs-api/intro.md
            label: "Overview",
            position: "left",
            activeBaseRegex: `/overview/`,
          },
          {
            // to: '/docs/learn/astro-pools/constant-product-pools',
            to: "/docs/learn/overview",
            // to: '/docs/learn/astro-pools/intro',
            // to: '/docs/learn/index',
            label: "Learn",
            position: "left",
            activeBaseRegex: `/learn/`,
          },
          {
            to: "/docs/govern/overview", // ./docs-api/intro.md
            label: "Govern",
            position: "left",
            activeBaseRegex: `/govern/`,
          },
          {
            // to: '/docs/develop/smart-contracts/astroport-contract-addresses',
            // to: '/docs/develop/category/smart-contracts',
            // to: '/docs/develop/smart-contracts/smart-contracts-intro',
            to: "/docs/develop/overview",
            label: "Develop",
            position: "left",
            activeBaseRegex: `/develop/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/astroport-fi/",
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],

        style: "primary",
        // hideOnScroll: true,
      },

      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Terms of Service",
                to: "https://astroport.fi/en/terms-and-conditions",
                // to: '/docs/overview/legal/terms-of-service',
              },
              {
                label: "Cookie Policy",
                to: "https://astroport.fi/en/cookie-policy",
              },
              {
                label: "Privacy Policy",
                to: "https://astroport.fi/en/privacy-policy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/astroport_fi",
              },
              {
                label: "Discord",
                href: "https://discord.astroport.fi",
              },
              {
                label: "Forum",
                href: "https://forum.astroport.fi/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://blog.astroport.fi/",
              },
              {
                label: "GitHub",
                href: "https://github.com/astroport-fi/",
              },
            ],
          },
        ],
      },

      metadata: [
        {
          property: "og:image",
          content: "https://docs.astroport.fi/img/global-metadata.png",
        },
        {
          property: "image",
          content: "https://docs.astroport.fi/img/global-metadata.png",
        },
      ],

      // prism: {
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
