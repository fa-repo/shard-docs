import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * BasicExample
 */

const BasicExample = props => (
  <ShardDocs
    title="BasicExample title"
    basePath="/examples/basic-example"
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Page A", composition: [<h1>Page A</h1>] },
      { type: "page", title: "Page B", composition: [<h1>Page B</h1>] },
      { type: "page", title: "Page C", composition: [<h1>Page C</h1>] }
    ]}
  />
);

BasicExample.propTypes = {};
BasicExample.defaultProps = {};

export default BasicExample;
