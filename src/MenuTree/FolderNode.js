import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import MenuTree from "./MenuTree";
import FolderIcon from "boxicons/svg/solid/bxs-folder.svg";
import ChevronRightIcon from "boxicons/svg/solid/bxs-down-arrow.svg";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import HeadingNode from "./HeadingNode";

/**
 * MenuTree
 */

const FolderNode = ({ node, onNavigate }) => (
  <ul className="shard-docs-menu-folder" style={{ paddingLeft: 7 + "px" }}>
    {node.title && <HeadingNode node={node} onNavigate={onNavigate} />}
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
