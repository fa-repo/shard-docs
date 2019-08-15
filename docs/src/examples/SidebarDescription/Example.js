import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarDescriptionExample
 */

const SidebarDescriptionExample = props => (
  <ShardDocs
    title="SidebarDescriptionExample title"
    description="A description describing your documentation"
    basePath="/examples/sidebar-description"
  />
);

SidebarDescriptionExample.propTypes = {};
SidebarDescriptionExample.defaultProps = {};

export default SidebarDescriptionExample;
