import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar structure basic usage example
 */

const source = [
  { page: "Mangos", composition: [<h1>Mangos</h1>] },
  { page: "Plums", composition: [<h1>Plums</h1>] },
  { page: "Avacadoes", composition: [<h1>Avacadoes</h1>] }
];

export default () => (
  <ShardDocs title="Basic example" basePath="/examples/sidebar-structure-basic" source={source} />
);
