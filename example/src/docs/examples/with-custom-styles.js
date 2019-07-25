import React from "react";
import ShardDocs from "shard-docs";

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
      baseComposition={[<h1>Overview</h1>]}
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
