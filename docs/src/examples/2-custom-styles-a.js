import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Custom styles example
 */

const source = [
  {
    title: "Essentials",
    children: [{ title: "Get started", document: <h1>Get started</h1> }]
  }
];

export default () => (
  <>
    <ShardDocs
      title="Documentation title"
      basePath="/examples/custom-styles/essentials/get-started"
      source={source}
    />
    <style dangerouslySetInnerHTML={{ __html: `.shard-docs-sidebar { background: red; }` }} />
  </>
);
