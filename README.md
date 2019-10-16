<div align="center">

# Shard Docs

A doc manager written in React for organising and viewing MDX files.

[![version][version-badge]][package] [![MIT License][license-badge]][license]

[**Read The Docs**](https://fa-repo.github.io/shard-docs/#/docs)
</div>

<hr/>

<image src="/example.jpg" alt="screenshot" style="box-shadow: 0 0 8px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.3);border-radius: 8px;">

## Table of Contents

- [Requirements](#install)
- [Install](#install)
- [Basic usage](#basic-usage)
- [API](#api)
- [Source schema](#source-schema)
- [Write docs with MDX](#write-docs-with-mdx)
- [License](#license)

## Requirements
This package relies internally on [react router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.

## Install
```
npm install @fa-repo/shard-docs react-router-dom
```


## Basic usage

```jsx
// documentation.js
import React from "react";
import { render } from "react-dom";
import ShardDocs from "@fa-repo/shard-docs";
import "@fa-repo/shard-docs/dist/shard-docs.css";

const source = [
  { title: "Install", document: <><h1>Install</h1></> },
  { title: "Basic usage", document: <><h1>Basic usage</h1></> },
  {
    title: "Examples",
    folder: [
      { title: "Use case A", document: <><h1>Use case A</h1></> },
      { title: "Use case B", document: <><h1>Use case B</h1></> }
    ]
  },
  { title: "Github", externalLink: "https://github.com" },
]

render(
  <ShardDocs
    title="ShardDocs demo"
    description="A description describing the purpose of the docs."
    source={source}
  />,
  document.getElementById("root")
);
```

## API
```jsx
<ShardDocs
  /**
   * Assign docs a title. Title appears at the top of the sidebar.
   * @string
   * @default ""
  */
  title="App title"
  /**
   * Describe intention of docs. Appears below the title.
   * @optional
   * @string
   * @default ""
  */
  description="App description"
  /**
   * Add a prefix to all routes. E.g. "/docs/".
   * @optional
   * @string
   * @default "/"
  */
  basePath="/docs/"
  /**
   * Hide "Built with Shard Docs" at the bottom of the sidebar.
   * @optional
   * @boolean
   * @default false
  */
  hideBuiltWithShardDocs={true}
  /**
   * Data is fed in through the source prop. Scroll down for an explanation of the schema.
   * @array
   * @default []
  */
  useBrowserRouter={true}
  /**
   * Use react routers BrowserRouter instead of HashRouter (default) for routing..
   * @boolean
   * @default false
  */
  source={[
    {
      title: "Essentials",
      folder: [
        { title: "Get started", document: <p>Lorem ipsum dolor sit amet..</p> }
      ]
    }
  ]}
/>
```

## Source schema
Data is composed in a way that describes the relationship of items to each other - like a tree structure. The structure of the data influences the paths generated for document and folder routes as well as how the sidebar menu is rendered.

Each item has a common `title` property. The combination of subsequent properties define their types.

### Let's take a look at the different items:

`document`:  Represents a document endpoint.
```jsx
  {
    /**
     * Document title
     * @string
    */
    title: "Install",
    /**
     * Document content
     * @jsx
    */
    document: <h1>Install</h1>
  }
```

`folder`: Contains any array with any number of items.
```jsx
  {
    /**
     * Folder title.
     * @optional
     * @string
    */
    title: "Install",
    /**
     * Folder items. Can contain any type of node.
     * @array
    */
    folder: [ /* items */ ]
  }
```

`externalLink`: A link that opens in a new tab.
```jsx
  {
    /**
     * Link title.
     * @string
    */
    title: "Github",
    /**
     * Link href.
     * @string
    */
    externalLink: "http://www.github.com"
  }
```


## Write docs with MDX
Documents are composed from JSX which offers a lot of power but the syntax can get unwieldy. MDX makes writing docs a breaze by combining the syntaxes of JSX and markdown. [MDXJS](https://github.com/mdx-js/mdx) is wholly recomended for handling MDX. Cursory installation instructions below.

### Example MDX script
```mdx
// doc.mdx
import "SomeComponent" from "./SomeComponent";

# Title

Lorem ipsum dolor sit amet, consetetur sadipscing elitr.

<SomeComponent>
```

### MDJSX Prerequisite
- babel
- webpack ([or other module bundlers](https://mdxjs.com/getting-started))

### Install MDJSX
```bash
npm install --save-dev @mdx-js/loader @babel/preset-env @babel/preset-react babel-loader
```

### Configure MDJSX

```js
//webpack.config.js
module.exports = {
  module: {
    // ...
    rules: [
      // ...
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          '@mdx-js/loader'
        ]
      }
    ]
  }
}
```

```jsx
// babel.config.js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

```


## License
[MIT](https://choosealicense.com/licenses/mit/)

[version-badge]: https://img.shields.io/npm/v/@fa-repo/shard-docs.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/@testing-library/react.svg?style=flat-square
[package]: https://www.npmjs.com/package/@fa-repo/shard-docs
[license]: https://github.com/fa-repo/shard-docs/blob/master/LICENSE.md