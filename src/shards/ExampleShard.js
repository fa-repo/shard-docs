import React from "react";
import PropTypes from "prop-types";
import parseMarkdown from "./lib/parseMarkdown";
import "./ExampleShard.scss";

/**
 * ExampleShard
 */

const ExampleShard = props => {
  const sourceCode = `\`\`\`${props.lang}
${props.sourceCode.trim()}
\`\`\``;

  return (
    <div className="shard-docs-example-shard">
      <header>{props.header}</header>
      <div>{props.children}</div>
      <footer dangerouslySetInnerHTML={{ __html: parseMarkdown(sourceCode) }} />
    </div>
  );
};

ExampleShard.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  lang: PropTypes.string,
  sourceCode: PropTypes.string
};

ExampleShard.defaultProps = {
  header: "",
  lang: "",
  sourceCode: ""
};

export default ExampleShard;
