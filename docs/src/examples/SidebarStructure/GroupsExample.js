import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureGroupsExample
 */

const SidebarStructureGroupsExample = props => (
  <ShardDocs
    title="Groups example"
    basePath="/examples/sidebar-structure-groups"
    tree={[
      { page: "Camels", composition: [<h1>Camels</h1>] },
      { page: "Hippos", composition: [<h1>Hippos</h1>] },
      { page: "Baboons", composition: [<h1>Baboons</h1>] },
      {
        group: "Wine",
        pages: [
          { page: "Red Bordeaux", composition: [<h1>Red Bordeaux</h1>] },
          { page: "Champagne", composition: [<h1>Champagne</h1>] },
          { page: "Rioja", composition: [<h1>Rioja</h1>] }
        ]
      },
      {
        group: null,
        pages: [
          { page: "Great Western Rail", composition: [<h1>Great Western Rail</h1>] },
          { page: "East Midlands Trains", composition: [<h1>East Midlands Trains</h1>] },
          { page: "Eurostar", composition: [<h1>Eurostar</h1>] }
        ]
      }
    ]}
  />
);

SidebarStructureGroupsExample.propTypes = {};
SidebarStructureGroupsExample.defaultProps = {};

export default SidebarStructureGroupsExample;
