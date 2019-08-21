import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SidebarStructure
 */

export default [
  <p>
    Formulating documentation structure is quite visual and handily reflected on the sidebar. All
    you need are two types of objects: <code>group</code>s and <code>page</code>s (
    <i>a few more exist, see API reference</i>). <code>group</code>s will enable you to organise
    indent or space out your content while <code>page</code>s represent documentation endpoints.
  </p>,
  <h3>Basic usage</h3>,
  <CodeExampleShard
    sourceCode={`
<ShardDocs
  tree={[
    { page: "Page A", composition: [<h1>Page A</h1>] },
    { page: "Page B", composition: [<h1>Page B</h1>] },
    { page: "Page C", composition: [<h1>Page C</h1>] },
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-basic" />
  </CodeExampleShard>,
  <h3>With groups</h3>,
  <CodeExampleShard
    sourceCode={`
<ShardDocs
  tree={[
    { page: "Page A", composition: [<h1>Page A</h1>] },
    {
      group: "Group A",
      pages: [
        { page: "Page B", composition: [<h1>Page B</h1>] },
        { page: "Page C", composition: [<h1>Page C</h1>] }
      ]
    },
    {
      group: null, /* discrete group */
      pages: [
        { page: "Page D", composition: [<h1>Page D</h1>] },
        { page: "Page E", composition: [<h1>Page E</h1>] }
      ]
    },
  ]}
/>`}
  >
    {" "}
    <IframeShard path="#/examples/sidebar-structure-groups" />
  </CodeExampleShard>,
  <h3>With indentation</h3>,
  <CodeExampleShard
    sourceCode={`
<ShardDocs
  tree={[
    {
      group: "Group A",
      pages: [
        { page: "Page B", composition: [<h1>Page B</h1>] },
        { page: "Page C", composition: [<h1>Page C</h1>] },
        {
          group: "Group B",
          pages: [
            { page: "Page D", composition: [<h1>Page D</h1>] },
            { page: "Page E", composition: [<h1>Page E</h1>] }
          ]
        },
      ]
    },
    {
      group: null, /* discrete group */
      pages: [
        { page: "Page G", composition: [<h1>Page F</h1>] },
        { page: "Page G", composition: [<h1>Page G</h1>] },
        {
          group: null, /* discrete group */
          pages: [
            { page: "Page H", composition: [<h1>Page H</h1>] },
            { page: "Page I", composition: [<h1>Page I</h1>] }
          ]
        },
      ]
    },
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-indentation" />
  </CodeExampleShard>
];
