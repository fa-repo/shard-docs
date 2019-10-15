import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { documentTypes } from "../types";
import FileIcon from "../icons/FileIcon";

/**
 * DocumentNode
 */
const DocumentNode = ({ node, onNavigate }) => {
  return (
    <li className="shard-docs-menu-document">
      <NavLink
        style={{ paddingLeft: node.depth * 15 + "px" }}
        className={classnames(node.isActive && "active")}
        onClick={e => (node.isEmpty ? e.preventDefault() : onNavigate())}
        disabled={node.isEmpty}
        to={node.path}
        exact
      >
        <FileIcon />
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
