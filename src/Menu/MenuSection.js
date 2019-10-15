import React from "react";
import PropTypes from "prop-types";
import MenuTree from "../MenuTree";
import { folderTypes } from "../types";
import ArrowDown from "../icons/ArrowDown";

/**
 * MenuSection
 */

const MenuSection = props => {
  const showHeader = Boolean(props.node.title);

  return (
    <section className="shard-docs-menu-section">
      {showHeader && (
        <header className="shard-docs-menu-section-header">
          <a href="#">
            <h3>{props.node.title}</h3>
            <ArrowDown />
          </a>
        </header>
      )}
      <ul>
        <MenuTree tree={props.node.folder} onNavigate={props.onNavigate} />
      </ul>
    </section>
  );
};

MenuSection.propTypes = {
  node: folderTypes,
  onNavigate: PropTypes.func
};
MenuSection.defaultProps = {
  node: {},
  onNavigate: () => {}
};

export default MenuSection;
