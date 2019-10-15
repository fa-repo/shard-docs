import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import MenuTree from "./MenuTree";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import TriangleArrowDown from "../icons/TriangleArrowDown";

/**
 * MenuTree
 */

const FolderNode = ({ node, onNavigate }) => (
  <ul className="shard-docs-menu-folder">
    {node.title && (
      <li className="shard-docs-menu-folder-header">
        <NavLink
          className={classnames(node.isActive && "active")}
          style={{ paddingLeft: node.depth * 15 + "px" }}
          onClick={e => (node.isEmpty ? e.preventDefault() : onNavigate())}
          disabled={node.isEmpty}
          to={node.path}
          exact
        >
          <TriangleArrowDown />
          {node.title}
        </NavLink>
      </li>
    )}
    <MenuTree tree={node.folder} onNavigate={onNavigate} />
  </ul>
);

FolderNode.propTypes = {
  node: folderTypes,
  onNavigate: PropTypes.func
};

FolderNode.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default FolderNode;
