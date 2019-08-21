import React from "react";
import PropTypes from "prop-types";
import parseMarkdown from "./lib/parseMarkdown";
import "./SourceCodeShard.scss";

/**
 * CodeShard
 */

const CodeShard = props => {
  const code = `\`\`\`${props.lang}
${props.code.trim()}
\`\`\``;
  const html = parseMarkdown(code);
  return (
    <div
      className="shard-docs-markdown-shard shard-docs-source-code-shard"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

CodeShard.propTypes = {
  lang: PropTypes.oneOf([
    "bash",
    "css",
    "html",
    "http",
    "javascript",
    "js",
    "json",
    "jsx",
    "markdown",
    "mathml",
    "md",
    "php",
    "regex",
    "sass",
    "scss",
    "shell",
    "sql",
    "svg",
    "ts",
    "tsx",
    "typescript",
    "xml",
    "yaml",
    "yml"
  ]),
  markdown: PropTypes.string
};

CodeShard.defaultProps = {
  lang: "",
  markdown: ""
};

export default CodeShard;
