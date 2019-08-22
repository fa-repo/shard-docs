import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarStructureBasicExample
 */

const SidebarStructureBasicExample = props => (
  <ShardDocs
    title="Basic example"
    basePath="/examples/sidebar-structure-basic"
    tree={[
      { page: "Mangos", composition: [<h1>Mangos</h1>] },
      { page: "Plums", composition: [<h1>Plums</h1>] },
      { page: "Avacadoes", composition: [<h1>Avacadoes</h1>] }
    ]}
  />
);

SidebarStructureBasicExample.propTypes = {};
SidebarStructureBasicExample.defaultProps = {};

export default SidebarStructureBasicExample;
