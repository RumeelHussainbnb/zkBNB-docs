// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "zkBNB -  Official Documentation",
  tagline: "A trustless and scaling solution for BNB Smart Chain",
  url: "https://rumeelhussainbnb.github.io/",
  baseUrl: "/zkBNB-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RumeelHussainbnb", // Usually your GitHub org/user name.
  projectName: "zkbnb-docs", // Usually your repo name. 
  deploymentBranch: 'gh-pages',
  //trailingSlash: false,


  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/RumeelHussainbnb/zkBNB-docs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/RumeelHussainbnb/zkBNB-docs"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        logo: {
          alt: "zkBNB Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Guide",
            position: "left",
            to: "/docs/guide/introduction/getting-started"
          },
          {
            label: "zkBNB API",
            position: "left",
            to: "/docs/zkbnb-api"
          },
          {
            label: "zkBNB SDKs",
            position: "left",
            to: "/docs/zkbnb-sdk-guides/"
          },
          {
            label: "FAQs",
            position: "left",
            to: "/docs/faqs/zkbnb-faqs"
          },
          {
            href: 'https://github.com/RumeelHussainbnb/zkBNB-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php",]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          zkbnb: {
            specPath: "swagger/zkbnb.yaml",
            outputDir: "docs/zkbnb",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
          }
        }
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
