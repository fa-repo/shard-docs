import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureBasicExample
 */

const SidebarStructureBasicExample = props => (
  <ShardDocs
    basePath="/examples/sidebar-structure-basic"
    tree={[
      { page: "Page A", composition: [<h1>Page A</h1>] },
      { page: "Page B", composition: [<h1>Page B</h1>] },
      { page: "Page C", composition: [<h1>Page C</h1>] }
    ]}
  />
);

SidebarStructureBasicExample.propTypes = {};
SidebarStructureBasicExample.defaultProps = {};

export default SidebarStructureBasicExample;
