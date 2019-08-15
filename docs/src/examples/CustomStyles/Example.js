import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * WithCustomStylesExample
 */

const WithCustomStylesExample = props => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `.shard-docs-sidebar {
        background: red;
      }`
      }}
    />
    <ShardDocs
      title="Documentation title"
      basePath="/examples/with-custom-styles"
      structure={[
        { type: "heading", heading: "Essentials" },
        { type: "page", title: "Get started", composition: [<h1>Get started</h1>] }
      ]}
    />
  </>
);

WithCustomStylesExample.propTypes = {};
WithCustomStylesExample.defaultProps = {};

export default WithCustomStylesExample;
