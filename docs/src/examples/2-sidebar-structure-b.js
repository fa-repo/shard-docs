import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar structure with groups example
 */

const source = [
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
];

export default () => (
  <ShardDocs title="Groups example" basePath="/examples/sidebar-structure-groups" source={source} />
);
