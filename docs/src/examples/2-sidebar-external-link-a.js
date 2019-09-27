import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar external link example
 */

const source = [
  {
    group: null,
    pages: [
      { page: "Getting started", composition: [<h1>Getting started</h1>] },
      { page: "API reference", composition: [<h1>API reference</h1>] },
      { page: "Basic example", composition: [<h1>Basic example</h1>] },
      { external: "Github", link: "https://github.com/" }
    ]
  }
];

export default () => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-external-link"
    source={source}
  />
);
