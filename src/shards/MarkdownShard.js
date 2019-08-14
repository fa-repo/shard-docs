import React from "react";
import PropTypes from "prop-types";
import parseMarkdown from "../lib/parseMarkdown";
import "./MarkdownShard.scss";

/**
 * MarkdownShard
 */

const MarkdownShard = props => {
  return (
    <div
      className="shard-docs-markdown-shard"
      dangerouslySetInnerHTML={{
        __html: parseMarkdown(props.markdown)
      }}
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
