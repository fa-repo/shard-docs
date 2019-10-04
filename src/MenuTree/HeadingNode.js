import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

/**
 * HeadingNode
 */

const HeadingNode = ({ node, isActive, onNavigate }) => (
  <li className="shard-docs-menu-heading">
    <h3>
      <NavLink
        className={classnames(isActive && "active")}
        to={node.path}
        onClick={e => {
          if (node.isEmpty) e.preventDefault();
          onNavigate();
        }}
        disabled={node.isEmpty}
        exact
      >
        {node.title}
      </NavLink>
    </h3>
  </li>
);

HeadingNode.propTypes = {
  node: folderTypes,
  isActive: PropTypes.bool,
  onNavigate: PropTypes.func
};
HeadingNode.defaultProps = {
  node: {},
  isActive: false,
  onNavigate: () => {}
};

export default HeadingNode;
