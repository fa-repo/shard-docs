import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SidebarHeadings
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarHeadings";

export default [
  <ExampleShard
    title="Sidebar headings"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`<ShardDocs
  title="Documentation title"
  structure={[
    { type:"heading", heading: "Heading A" },
    { type: "page", title: "Page A", composition: [ <h1>Page A</h1> ] },
    { type: "page", title: "Page B", composition: [ <h1>Page B</h1> ] },
    { type: "page", title: "Page C", composition: [ <h1>Page C</h1> ] },
    { type: "heading", heading: "Heading B" },
    { type: "page", title: "Page D", composition: [ <h1>Page D</h1> ] },
    { type: "page", title: "Page E", composition: [ <h1>Page E</h1> ] },
    { type: "page", title: "Page F", composition: [ <h1>Page F</h1> ] },
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-headings" />
  </ExampleShard>
];
