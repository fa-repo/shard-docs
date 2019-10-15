import React from "react";
import PropTypes from "prop-types";
import ExternalIcon from "../icons/LinkExternal";
import { externalLinkTypes } from "../types";

/**
 * ExternalLinkNode
 */

const ExternalLinkNode = ({ node }) => (
  <li className="shard-docs-menu-external">
    <a href={node.link} target="_blank" style={{ paddingLeft: node.depth * 15 + "px" }}>
      <ExternalIcon />
      {node.title}
    </a>
  </li>
);

ExternalLinkNode.propTypes = {
  node: externalLinkTypes
};

ExternalLinkNode.defaultProps = {
  node: {
    title: "",
    link: ""
  }
};

export default ExternalLinkNode;
