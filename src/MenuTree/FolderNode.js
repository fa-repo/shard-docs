import React from "react";
import PropTypes from "prop-types";
import { folderTypes } from "../types";
import MenuTree from "./MenuTree";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import TriangleArrowDown from "../icons/TriangleArrowDown";
import TriangleArrowRight from "../icons/TriangleArrowRight";
import sessionDB from "../utils/sessionDB";

/**
 * FolderNode
 */

class FolderNode extends React.Component {
  state = {
    sessionId: "fa-repo-shard-docs-folder-expanded" + this.props.node.path,
    expanded: true
  };

  componentDidMount() {
    this.setState({
      expanded: sessionDB.get(this.state.sessionId, true)
    });
  }

  toggleFolder = () => {
    sessionDB.set(this.state.sessionId, !this.state.expanded);

    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { node, onNavigate } = this.props;

    return (
      <ul className="shard-docs-menu-folder">
        {node.title && (
          <li className="shard-docs-menu-folder-header">
            <NavLink
              className={classnames(node.isActive && "active")}
              style={{ paddingLeft: node.depth * 15 + "px" }}
              onClick={e => {
                if (node.isEmpty) {
                  e.preventDefault();
                } else {
                  onNavigate();
                  this.toggleFolder();
                }
              }}
              disabled={node.isEmpty}
              to={node.path}
              exact
            >
              {this.state.expanded ? <TriangleArrowDown /> : <TriangleArrowRight />}
              {node.title}
            </NavLink>
          </li>
        )}
        {this.state.expanded && <MenuTree tree={node.folder} onNavigate={onNavigate} />}
      </ul>
    );
  }
}

FolderNode.propTypes = {
  node: folderTypes,
  onNavigate: PropTypes.func
};

FolderNode.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default FolderNode;
