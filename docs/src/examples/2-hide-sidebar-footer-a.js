import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Hide sidebar footer example
 */

const source = [
  {
    page: "Hide sidebar footer",
    composition: [<h1>Hide sidebar footer</h1>]
  }
];

export default () => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/hide-sidebar-footer"
    showSidebarFooter={false}
    tree={source}
  />
);
