import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureIndentationExample
 */

const SidebarStructureIndentationExample = props => (
  <ShardDocs
    title="Indentation example"
    basePath="/examples/sidebar-structure-indentation"
    tree={[
      {
        group: "Europe bucket list:",
        pages: [
          {
            group: null,
            pages: [
              {
                page: "- France: Scale Mont Blanc",
                composition: [<h1>Scale Mont Blanc</h1>]
              },
              {
                page: "- Italy: Dine at a Tuscan restaurent",
                composition: [<h1>Dine at a Tuscan restaurent</h1>]
              },
              {
                page: "- Spain: Walk the Camino de Santiago",
                composition: [<h1>Dine at a rustic Tuscan restaurent</h1>]
              }
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
