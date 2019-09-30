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
    <i>
      a few more exist, see <a href="/#/docs/reference/api-reference">API reference</a>
    </i>
    ). <code>group</code>s will enable you to organise indent or space out your content while{" "}
    <code>page</code>s represent documentation endpoints.
  </p>,
  <CodeExampleShard
    title="Basic usage"
    sourceCode={`
<ShardDocs
  title="Basic example"
  source={[
    { title: "Mangos", document: [<h1>Mangos</h1>] },
    { title: "Plums", document: [<h1>Plums</h1>] },
    { title: "Avacadoes", document: [<h1>Avacadoes</h1>] }
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-basic" style={{ width: "1200px" }} />
  </CodeExampleShard>,
  <CodeExampleShard
    title="With groups"
    sourceCode={`
<ShardDocs
  title="Groups example"
  source={[
    { title: "Camels", document: [<h1>Camels</h1>] },
    { title: "Hippos", document: [<h1>Hippos</h1>] },
    { title: "Baboons", document: [<h1>Baboons</h1>] },
    {
      group: "Wine",
      titles: [
        { title: "Red Bordeaux", document: [<h1>Red Bordeaux</h1>] },
        { title: "Champagne", document: [<h1>Champagne</h1>] },
        { title: "Rioja", document: [<h1>Rioja</h1>] }
      ]
    },
    {
      group: null,
      titles: [
        { title: "Great Western Rail", document: [<h1>Great Western Rail</h1>] },
        { title: "East Midlands Trains", document: [<h1>East Midlands Trains</h1>] },
        { title: "Eurostar", document: [<h1>Eurostar</h1>] }
      ]
    }
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-groups" style={{ width: "1200px" }} />
  </CodeExampleShard>,
  <CodeExampleShard
    title="With indentation"
    sourceCode={`
<ShardDocs
  title="Indentation example"
  source={[
    {
      title: "Europe bucket list:",
      children: [
        {
          title: null,
          children: [
            {
              title: "- France: Scale Mont Blanc",
              document: [<h1>Scale Mont Blanc</h1>]
            },
            {
              title: "- Italy: Dine at a Tuscan restaurent",
              document: [<h1>Dine at a Tuscan restaurent</h1>]
            },
            {
              title: "- Spain: Walk the Camino de Santiago",
              document: [<h1>Dine at a rustic Tuscan restaurent</h1>]
            }
          ]
        }
      ]
    }
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-structure-indentation" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
