import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { documentTypes } from "../types";

/**
 * DocumentNode
 */
const DocumentNode = ({ node, onNavigate }) => {
  return (
    <li className="shard-docs-menu-document">
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
    </li>
  );
};

DocumentNode.propTypes = {
  node: documentTypes,
  onNavigate: PropTypes.func
};
DocumentNode.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default DocumentNode;
