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
    structure={[
      { type: "page", title: "Getting started", composition: [<h1>Getting started</h1>] },
      { type: "page", title: "API reference", composition: [<h1>API reference</h1>] },
      { type: "page", title: "Basic example", composition: [<h1>Basic example</h1>] }
    ]}
  />
);

SidebarDescriptionExample.propTypes = {};
SidebarDescriptionExample.defaultProps = {};

export default SidebarDescriptionExample;
