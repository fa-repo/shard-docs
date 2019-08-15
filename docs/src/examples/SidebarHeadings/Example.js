import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * SidebarHeadingsExample
 */

const SidebarHeadingsExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/sidebar-headings"
    structure={[
      { type: "heading", heading: "Heading A" },
      { type: "page", title: "Page A", composition: [<h1>Page A</h1>] },
      { type: "page", title: "Page B", composition: [<h1>Page B</h1>] },
      { type: "page", title: "Page C", composition: [<h1>Page C</h1>] },
      { type: "heading", heading: "Heading B" },
      { type: "page", title: "Page D", composition: [<h1>Page D</h1>] },
      { type: "page", title: "Page E", composition: [<h1>Page E</h1>] },
      { type: "page", title: "Page F", composition: [<h1>Page F</h1>] }
    ]}
  />
);

SidebarHeadingsExample.propTypes = {};
SidebarHeadingsExample.defaultProps = {};

export default SidebarHeadingsExample;
