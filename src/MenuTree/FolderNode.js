import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import HeadingNode from "./HeadingNode";
import MenuTree from "./MenuTree";

/**
 * MenuTree
 */

const FolderNode = ({ node, onNavigate }) => (
  <ul className="shard-docs-menu-folder">
    {node.title && <HeadingNode node={node} onNavigate={onNavigate} />}
    <MenuTree tree={node.children} onNavigate={onNavigate} />
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
