import React from "react";
import PropTypes from "prop-types";
import parseMarkdown from "./lib/parseMarkdown";
import "./MarkdownShard.scss";

/**
 * MarkdownShard
 */

const MarkdownShard = props => {
  const html = parseMarkdown(props.markdown);
  return <div className="shard-docs-markdown-shard" dangerouslySetInnerHTML={{ __html: html }} />;
};

MarkdownShard.propTypes = {
  markdown: PropTypes.string
};

MarkdownShard.defaultProps = {
  markdown: ""
};

export default MarkdownShard;
