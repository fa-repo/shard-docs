import React from "react";
import PropTypes from "prop-types";
import DocumentNode from "./DocumentNode";
import ExternalLinkNode from "./ExternalLinkNode";
import FolderNode from "./FolderNode";
import { appTypes, treeTypes } from "../types";

/**
 * MenuTree
 */

const MenuTree = ({ tree, app, onNavigate }) => {
  return (
    <>
      {tree.map((node, i) => {
        if (node.type === "document") {
          const isActive = app.activePath === node.path;
          return <DocumentNode key={i} isActive={isActive} node={node} onNavigate={onNavigate} />;
        } else if (node.type === "external") {
          return <ExternalLinkNode key={i} node={node} />;
        } else if (node.type === "folder") {
          return <FolderNode key={i} app={app} node={node} onNavigate={onNavigate} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

MenuTree.propTypes = {
  app: appTypes,
  tree: treeTypes,
  onNavigate: PropTypes.func
};
MenuTree.defaultProps = {
  app: {},
  tree: [],
  onNavigate: () => {}
};

export default MenuTree;
