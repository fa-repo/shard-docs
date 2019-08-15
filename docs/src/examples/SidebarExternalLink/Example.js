import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarExternalLinkExample
 */

const SidebarExternalLinkExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-external-link"
    structure={[
      { type: "page", title: "Getting started", composition: [<h1>Getting started</h1>] },
      { type: "page", title: "API reference", composition: [<h1>API reference</h1>] },
      { type: "page", title: "Basic example", composition: [<h1>Basic example</h1>] },
      { type: "external", title: "Github", link: "https://github.com/" }
    ]}
  />
);

SidebarExternalLinkExample.propTypes = {};
SidebarExternalLinkExample.defaultProps = {};

export default SidebarExternalLinkExample;
