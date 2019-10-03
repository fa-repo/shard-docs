import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Sidebar structure basic usage example
 */

const source = [
  { title: "Mangos", document: <h1>Mangos</h1> },
  { title: "Plums", document: <h1>Plums</h1> },
  { title: "Avacadoes", document: <h1>Avacadoes</h1> }
];

export default () => (
  <ShardDocs title="Basic example" basePath="/examples/sidebar-structure-basic" source={source} />
);
