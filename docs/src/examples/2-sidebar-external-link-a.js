import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar external link example
 */

const source = [
  {
    title: null,
    children: [
      { title: "Some page A", document: <p>Lorem ipsum...</p> },
      { title: "Some page B", document: <p>Lorem ipsum...</p> },
      { title: "Some page C", document: <p>Lorem ipsum...</p> },
      { title: "Github", externalLink: "https://github.com/" }
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
