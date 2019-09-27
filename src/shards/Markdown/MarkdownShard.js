import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import parseMarkdown from "../lib/parseMarkdown";
import "./MarkdownShard.scss";

/**
 * MarkdownShard
 */

const MarkdownShard = props => {
  const html = parseMarkdown(props.markdown);
  return (
    <div
      className={classnames("shard-docs-markdown-shard", props.className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

MarkdownShard.propTypes = {
  markdown: PropTypes.string
};

MarkdownShard.defaultProps = {
  markdown: ""
};

export default MarkdownShard;
