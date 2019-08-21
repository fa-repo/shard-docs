import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureGroupsExample
 */

const SidebarStructureGroupsExample = props => (
  <ShardDocs
    basePath="/examples/sidebar-structure-groups"
    tree={[
      { page: "Page A", composition: [<h1>Page A</h1>] },
      { page: "Page B", composition: [<h1>Page A</h1>] },
      { page: "Page C", composition: [<h1>Page A</h1>] },
      {
        group: "Group A",
        pages: [
          { page: "Page D", composition: [<h1>Page D</h1>] },
          { page: "Page E", composition: [<h1>Page E</h1>] },
          { page: "Page F", composition: [<h1>Page F</h1>] }
        ]
      },
      {
        group: null,
        pages: [
          { page: "Page G", composition: [<h1>Page G</h1>] },
          { page: "Page H", composition: [<h1>Page H</h1>] },
          { page: "Page I", composition: [<h1>Page I</h1>] }
        ]
      }
    ]}
  />
);

SidebarStructureGroupsExample.propTypes = {};
SidebarStructureGroupsExample.defaultProps = {};

export default SidebarStructureGroupsExample;
