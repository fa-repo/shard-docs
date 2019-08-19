import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * HideSidebarFooter
 */

const HideSidebarFooter = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/hide-sidebar-footer"
    showSidebarFooter={false}
    structure={[
      {
        type: "page",
        title: "Hide sidebar footer",
        composition: [<h1>Hide sidebar footer</h1>]
      }
    ]}
  />
);

HideSidebarFooter.propTypes = {};
HideSidebarFooter.defaultProps = {};

export default HideSidebarFooter;
