import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { documentTypes } from "../types";
import FileIcon from "ionicons/dist/collection/icon/svg/md-document.svg";

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
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-k</title>
          <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z"></path>
          <path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z"></path>
        </svg>
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
