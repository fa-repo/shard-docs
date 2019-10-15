import React from "react";
import PropTypes from "prop-types";
import MenuTree from "../MenuTree";
import { folderTypes } from "../types";
import ArrowDown from "../icons/ArrowDown";
import ArrowRight from "../icons/ArrowRight";
import sessionDB from "../utils/sessionDB";
import classnames from "classnames";

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
    console.log(this.props);
    const { node, onNavigate } = this.props;
    const collapsible = Boolean(node.title);
    const expanded = this.state.expanded;

    const className = classnames(
      "shard-docs-menu-section",
      collapsible && "collapsible",
      expanded && "expanded"
    );

    return (
      <section className={className}>
        {collapsible && (
          <header className="shard-docs-menu-section-header">
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.toggle();
              }}
            >
              <h3>{node.title}</h3>
              {expanded ? <ArrowDown /> : <ArrowRight />}
            </a>
          </header>
        )}
        {(collapsible ? expanded : true) && (
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
