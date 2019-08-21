import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarExternalLinkExample
 */

const SidebarExternalLinkExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-external-link"
    tree={[
      {
        group: null,
        pages: [
          { page: "Getting started", composition: [<h1>Getting started</h1>] },
          { page: "API reference", composition: [<h1>API reference</h1>] },
          { page: "Basic example", composition: [<h1>Basic example</h1>] },
          { external: "Github", link: "https://github.com/" }
        ]
      }
    ]}
  />
);

SidebarExternalLinkExample.propTypes = {};
SidebarExternalLinkExample.defaultProps = {};

export default SidebarExternalLinkExample;
