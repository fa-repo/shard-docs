import React from "react";
import PropTypes from "prop-types";
import DocumentNode from "./DocumentNode";
import ExternalLinkNode from "./LinkExternalNode";
import FolderNode from "./FolderNode";
import { treeTypes } from "../types";
import "./MenuTree.scss";

/**
 * MenuTree
 */

const MenuTree = ({ tree, onNavigate }) => {
  return (
    <>
      {tree.map((node, i) => {
        if (node.type === "document") {
          return <DocumentNode key={i} node={node} onNavigate={onNavigate} />;
        } else if (node.type === "external") {
          return <ExternalLinkNode key={i} node={node} />;
        } else if (node.type === "folder") {
          return <FolderNode key={i} node={node} onNavigate={onNavigate} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

MenuTree.propTypes = {
  tree: treeTypes,
  onNavigate: PropTypes.func
};

MenuTree.defaultProps = {
  tree: [],
  onNavigate: () => {}
};

export default MenuTree;
