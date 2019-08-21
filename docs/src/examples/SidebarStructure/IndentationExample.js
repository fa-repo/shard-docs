import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureIndentationExample
 */

const SidebarStructureIndentationExample = props => (
  <ShardDocs
    basePath="/examples/sidebar-structure-indentation"
    tree={[
      {
        group: "Group A",
        pages: [
          { page: "Page B", composition: [<h1>Page B</h1>] },
          { page: "Page C", composition: [<h1>Page C</h1>] },
          {
            group: "Group B",
            pages: [
              { page: "Page D", composition: [<h1>Page D</h1>] },
              { page: "Page E", composition: [<h1>Page E</h1>] }
            ]
          }
        ]
      },
      {
        group: null /* discrete group */,
        pages: [
          { page: "Page G", composition: [<h1>Page F</h1>] },
          { page: "Page G", composition: [<h1>Page G</h1>] },
          {
            group: null /* discrete group */,
            pages: [
              { page: "Page H", composition: [<h1>Page H</h1>] },
              { page: "Page I", composition: [<h1>Page I</h1>] }
            ]
          }
        ]
      }
    ]}
  />
);

SidebarStructureIndentationExample.propTypes = {};
SidebarStructureIndentationExample.defaultProps = {};

export default SidebarStructureIndentationExample;
