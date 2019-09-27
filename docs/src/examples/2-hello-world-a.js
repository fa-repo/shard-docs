import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * Hello world example
 */

const source = [
  {
    page: "Hello world",
    composition: [<img src="/images/hello-world.jpg" alt="Turtle" />]
  }
];

export default () => (
  <ShardDocs title="Package name" basePath="/examples/hello-world" tree={source} />
);
