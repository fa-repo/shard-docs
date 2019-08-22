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
  title="Basic example"
  tree={[
    { page: "Mangos", composition: [<h1>Mangos</h1>] },
    { page: "Plums", composition: [<h1>Plums</h1>] },
    { page: "Avacadoes", composition: [<h1>Avacadoes</h1>] },
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-basic" />
  </CodeExampleShard>,
  <h3>With groups</h3>,
  <CodeExampleShard
    sourceCode={`
<ShardDocs
  title="Groups example"
  tree={[
    { page: "Camels", composition: [<h1>Camels</h1>] },
    { page: "Hippos", composition: [<h1>Hippos</h1>] },
    { page: "Baboons", composition: [<h1>Baboons</h1>] },
    {
      group: "Wine",
      pages: [
        { page: "Red Bordeaux", composition: [<h1>Red Bordeaux</h1>] },
        { page: "Champagne", composition: [<h1>Champagne</h1>] },
        { page: "Rioja", composition: [<h1>Rioja</h1>] }
      ]
    },
    {
      group: null,
      pages: [
        { page: "Great Western Rail", composition: [<h1>Great Western Rail</h1>] },
        { page: "East Midlands Trains", composition: [<h1>East Midlands Trains</h1>] },
        { page: "Eurostar", composition: [<h1>Eurostar</h1>] }
      ]
    }
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
  title="Indentation example"
  tree={[
    {
      group: "Europe bucket list:",
      pages: [
        {
          group: null,
          pages: [
            {
              page: "- France: Scale Mont Blanc",
              composition: [<h1>Scale Mont Blanc</h1>]
            },
            {
              page: "- Italy: Dine at a Tuscan restaurent",
              composition: [<h1>Dine at a Tuscan restaurent</h1>]
            },
            {
              page: "- Spain: Walk the Camino de Santiago",
              composition: [<h1>Dine at a rustic Tuscan restaurent</h1>]
            }
          ]
        }
      ]
    }
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-indentation" />
  </CodeExampleShard>
];
