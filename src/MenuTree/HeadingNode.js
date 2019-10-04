import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

/**
 * HeadingNode
 */

const HeadingNode = ({ node, onNavigate }) => (
  <li className="shard-docs-menu-heading">
    <h3>
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
        {node.title}
      </NavLink>
    </h3>
  </li>
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
