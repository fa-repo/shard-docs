import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

/**
 * HeadingNode
 */

const HeadingNode = ({ node, onNavigate }) => (
  <NavLink
    className={classnames(node.isActive && "active")}
    to={node.path}
    onClick={e => {
      if (node.isEmpty) e.preventDefault();
      onNavigate();
    }}
    disabled={node.isEmpty}
    exact
  >
    {node.depth > 0 && <div style={{ margin: " 1px 8px 0px 3px", fontSize: "12px" }}>▼</div>}
    {node.title}
    <svg
      className="shard-docs-menu-toggle-folder"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  </NavLink>
);

HeadingNode.propTypes = {
  node: folderTypes,
  onNavigate: PropTypes.func
};
HeadingNode.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default HeadingNode;
