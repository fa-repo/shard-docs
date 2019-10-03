import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar structure with indentation pages example
 */

const source = [
  {
    title: "Europe bucket list:",
    children: [
      {
        title: null,
        children: [
          {
            title: "- France: Scale Mont Blanc",
            document: <h1>Scale Mont Blanc</h1>
          },
          {
            title: "- Italy: Dine at a Tuscan restaurent",
            document: <h1>Dine at a Tuscan restaurent</h1>
          },
          {
            title: "- Spain: Walk the Camino de Santiago",
            document: <h1>Dine at a rustic Tuscan restaurent</h1>
          }
        ]
      }
    ]
  }
];

export default () => (
  <ShardDocs
    title="Indentation example"
    basePath="/examples/sidebar-structure-indentation"
    source={source}
  />
);
