import React from "react";
import ShardDocs from "shard-docs";

/**
 * WithSidebarHeadings
 */

const WithSidebarHeadings = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/with-sidebar-external-link"
    structure={[
      { type: "page", title: "Getting started", composition: [<h1>Getting started</h1>] },
      { type: "page", title: "API reference", composition: [<h1>API reference</h1>] },
      { type: "page", title: "Basic example", composition: [<h1>Basic example</h1>] },
      { type: "external", title: "Github", link: "https://github.com/" }
    ]}
  />
);

WithSidebarHeadings.propTypes = {};
WithSidebarHeadings.defaultProps = {};

export default WithSidebarHeadings;
