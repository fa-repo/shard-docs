import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * HelloWorldExample
 */

const HelloWorldExample = props => (
  <ShardDocs
    title="Package name"
    basePath="/examples/hello-world"
    structure={[
      {
        type: "page",
        title: "Hello world",
        composition: [<img src="/images/hello-world.jpg" alt="Turtle" />]
      }
    ]}
  />
);

HelloWorldExample.propTypes = {};
HelloWorldExample.defaultProps = {};

export default HelloWorldExample;
