# BNB Greenfield Official Documentation

## Overview
The zkBNB is an infrastructure for developers that helps them to build large scale BSC-based apps with higher throughput and much lower or even zero transaction fees. This is the GitHub repo of the official documentation and API refernce for zkBNB. This app is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

### Prerequisites

  - **Node** _version >= 14 or above_
    - _node -v_
      - v16.13.0
     
  - **npm** _--version_
    - 8.1.0
  
  - **Yarn** _version >= 1.5 _
    - _yarn --version_
      - 1.22.17

### How to Run Locally

Clone the reository and run the following commands.

### Installing Dependencies

* Install the packages.

Using `npm`

```bash
$ npm install
```

Using Yarn

```bash
$ yarn install
```

* Start local development server

Using `npm`

```bash
$ npm run start 
```

Using Yarn

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
We recommend to use the yarn package for building and deploying this website.

Using `npm`

```bash
$ npm run build 
```

Using Yarn

```bash
$ yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Build and Serve locally

Using `npm`

```bash
$ npm run start 
```

Using Yarn

```bash
$ yarn start 
```

### Serve Locally after build is created

Using `npm`

```bash
$ npm run serve
```

Using Yarn

```bash
$ yarn serve
```

The website is run locally on your default browser on http://localhost:3000.

### Generating API docs 

* The following command will generate API docs for all of the OpenAPI specifications 

```bash
yarn docusaurus gen-api-docs <id>
```

* Generating API docs for 'zkbnb' 

```bash
yarn docusaurus gen-api-docs zkbnb
```

### Cleaning API docs 

* The following command will clean API docs for all of the OpenAPI specifications 

```bash
yarn docusaurus clean-api-docs <id>
```

* Generating API docs for 'zkbnb' 

```bash
yarn docusaurus clean-api-docs zkbnb
```