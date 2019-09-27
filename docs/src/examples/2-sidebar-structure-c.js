import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar structure with indentation pages example
 */

const source = [
  {
    group: "Europe bucket list:",
    pages: [
      {
        group: null,
        pages: [
          { page: "- France: Scale Mont Blanc", composition: [<h1>Scale Mont Blanc</h1>] },
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
];

export default () => (
  <ShardDocs
    title="Indentation example"
    basePath="/examples/sidebar-structure-indentation"
    tree={source}
  />
);
