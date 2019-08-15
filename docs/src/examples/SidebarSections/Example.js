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
        title: "Essentials",
        children: [
          {
            type: "page",
            title: "Get started",
            composition: [<h1>Get started</h1>]
          },
          {
            type: "page",
            title: "API",
            composition: [<h1>API</h1>]
          }
        ]
      }
    ]}
  />
);

SidebarSectionsExample.propTypes = {};
SidebarSectionsExample.defaultProps = {};

export default SidebarSectionsExample;
