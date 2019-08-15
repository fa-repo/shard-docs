import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarSectionsExample
 */

const SidebarSectionsExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-sections"
    structure={[
      {
        type: "collection",
        title: "Section A",
        children: [
          { type: "page", title: "Page A", composition: [<h1>Page A</h1>] },
          { type: "page", title: "Page B", composition: [<h1>Page B</h1>] }
        ]
      },
      {
        type: "collection",
        title: "Section B",
        children: [
          { type: "page", title: "Page C", composition: [<h1>Page C</h1>] },
          { type: "page", title: "Page D", composition: [<h1>Page D</h1>] }
        ]
      }
    ]}
  />
);

SidebarSectionsExample.propTypes = {};
SidebarSectionsExample.defaultProps = {};

export default SidebarSectionsExample;
