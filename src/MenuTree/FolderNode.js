import React from "react";
import PropTypes from "prop-types";
import { appTypes, folderTypes } from "../types";
import HeadingNode from "./HeadingNode";
import MenuTree from "./MenuTree";

/**
 * MenuTree
 */

const FolderNode = ({ app, node, onNavigate }) => (
  <ul className="shard-docs-menu-folder">
    {node.title && (
      <HeadingNode isActive={app.activePath === node.path} node={node} onNavigate={onNavigate} />
    )}
    <MenuTree tree={node.children} app={app} onNavigate={onNavigate} />
  </ul>
);

FolderNode.propTypes = {
  app: appTypes,
  node: folderTypes,
  onNavigate: PropTypes.func
};
FolderNode.defaultProps = {
  app: {},
  node: {},
  onNavigate: () => {}
};

export default FolderNode;
