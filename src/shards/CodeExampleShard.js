import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import parseMarkdown from "./lib/parseMarkdown";
import "./CodeExampleShard.scss";

/**
 * CodeExampleShard
 */

const CodeExampleShard = props => {
  const sourceCode =
    props.sourceCode &&
    `\`\`\`${props.lang}
${props.sourceCode.trim()}
\`\`\``;

  const style = props.noShadow ? { boxShadow: "none" } : {};

  return (
    <div className={classnames("shard-docs-code-example-shard", props.className)} style={style}>
      {(props.title || props.repository) && (
        <header className="shard-docs-code-example-shard-header">
          <h3 className="shard-docs-code-example-shard-title" title={props.title}>
            {props.title}
          </h3>
          {props.repository && (
            <a
              className="shard-docs-code-example-shard-source-link"
              href={props.repository}
              target="_blank"
            >
              Source code
            </a>
          )}
        </header>
      )}
      {props.children && <div>{props.children}</div>}
      {sourceCode && <footer dangerouslySetInnerHTML={{ __html: parseMarkdown(sourceCode) }} />}
    </div>
  );
};

CodeExampleShard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  lang: PropTypes.string,
  sourceCode: PropTypes.string,
  repository: PropTypes.string,
  noShadow: PropTypes.bool
};

CodeExampleShard.defaultProps = {
  title: "",
  lang: "jsx",
  sourceCode: "",
  repository: "",
  noShadow: false
};

export default CodeExampleShard;
