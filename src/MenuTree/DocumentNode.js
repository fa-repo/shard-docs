import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { documentTypes } from "../types";

/**
 * DocumentNode
 */
const DocumentNode = ({ node, isActive, onNavigate }) => {
  return (
    <li className="shard-docs-menu-document">
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
    </li>
  );
};

DocumentNode.propTypes = {
  node: documentTypes,
  isActive: PropTypes.bool,
  onNavigate: PropTypes.func
};
DocumentNode.defaultProps = {
  node: {},
  isActive: false,
  onNavigate: () => {}
};

export default DocumentNode;
