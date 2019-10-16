import React from "react";
import PropTypes from "prop-types";
import folderTypes from "../types/folder";
import MenuTree from "../MenuTree";
import sessionDB from "../utils/sessionDB";
import classnames from "classnames";
import MenuSectionHeader from "./MenuSectionHeader";
import "./MenuSection.scss";

/**
 * MenuSection
 */

class MenuSection extends React.Component {
  state = {
    expanded: sessionDB.get(this.sessionId, this.props.index === 0 ? true : false)
  };

  get sessionId() {
    return "fa-repo-shard-docs-menu-section-expanded" + (this.props.node.path || "");
  }

  toggle = () => {
    sessionDB.set(this.sessionId, !this.state.expanded);
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { node, onNavigate } = this.props;
    const collapsible = Boolean(node.title);
    const expanded = this.state.expanded;

    const className = classnames(
      "shard-docs-menu-section",
      collapsible && "collapsible",
      expanded && "expanded"
    );

    // Ignore `expanded` value if section is discrete.
    const showMenu = collapsible ? expanded : true;

    return (
      <section className={className}>
        {collapsible && (
          <MenuSectionHeader title={node.title} expanded={expanded} onToggle={this.toggle} />
        )}
        {showMenu && (
          <ul>
            <MenuTree tree={node.folder} onNavigate={onNavigate} />
          </ul>
        )}
      </section>
    );
  }
}

MenuSection.propTypes = {
  index: PropTypes.number,
  node: folderTypes,
  onNavigate: PropTypes.func
};

MenuSection.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default MenuSection;
