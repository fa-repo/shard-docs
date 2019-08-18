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
      <header className="shard-docs-example-shard-header">
        <h3 className="shard-docs-example-shard-title" title={props.title}>
          {props.title}
        </h3>
        {props.sourceCodeLink && (
          <a
            className="shard-docs-example-shard-source-link"
            href={props.sourceCodeLink}
            target="_blank"
          >
            Source code
          </a>
        )}
      </header>
      <div>{props.children}</div>
      <footer dangerouslySetInnerHTML={{ __html: parseMarkdown(sourceCode) }} />
    </div>
  );
};

ExampleShard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  lang: PropTypes.string,
  sourceCode: PropTypes.string,
  sourceCodeLink: PropTypes.string
};

ExampleShard.defaultProps = {
  title: "",
  lang: "",
  sourceCode: "",
  sourceCodeLink: ""
};

export default ExampleShard;
