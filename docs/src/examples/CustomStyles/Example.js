import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * CustomStylesExample
 */

const CustomStylesExample = props => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `.shard-docs-sidebar { background: red; }`
      }}
    />
    <ShardDocs
      title="Documentation title"
      basePath="/examples/custom-styles"
      structure={[
        { type: "heading", heading: "Essentials" },
        { type: "page", title: "Get started", composition: [<h1>Get started</h1>] }
      ]}
    />
  </>
);

CustomStylesExample.propTypes = {};
CustomStylesExample.defaultProps = {};

export default CustomStylesExample;
