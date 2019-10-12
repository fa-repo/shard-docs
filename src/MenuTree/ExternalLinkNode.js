import React from "react";
import PropTypes from "prop-types";
import ExternalIcon from "boxicons/svg/regular/bx-link-external.svg";
import { externalLinkTypes } from "../types";

/**
 * ExternalLinkNode
 */

const ExternalLinkNode = ({ node }) => (
  <li className="shard-docs-menu-external">
    <a href={node.link} target="_blank">
      <ExternalIcon className="external-icon" /> {node.title}
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
