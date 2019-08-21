import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarGroupsExample
 */

const SidebarGroupsExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-groups"
    tree={[
      {
        group: "Section A",
        pages: [
          { page: "Page A", composition: [<h1>Page A</h1>] },
          { page: "Page B", composition: [<h1>Page B</h1>] }
        ]
      },
      {
        group: "Section B",
        pages: [
          { page: "Page C", composition: [<h1>Page C</h1>] },
          { page: "Page D", composition: [<h1>Page D</h1>] }
        ]
      }
    ]}
  />
);

SidebarGroupsExample.propTypes = {};
SidebarGroupsExample.defaultProps = {};

export default SidebarGroupsExample;
