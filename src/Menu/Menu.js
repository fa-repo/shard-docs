import React from "react";
import PropTypes from "prop-types";
import { appTypes, treeTypes } from "../types";
import MenuTree from "../MenuTree";
import MenuSection from "./MenuSection";
import "./Menu.scss";

/**
 * Menu
 */

const Menu = props => {
  return (
    <div className="shard-docs-menu" data-show-on-mobile={props.showOnMobile}>
      {props.tree.map((node, i) => (
        <MenuSection key={i} index={i} node={node} onNavigate={props.onNavigate} />
      ))}
    </div>
  );
};

Menu.propTypes = {
  tree: treeTypes,
  showOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
Menu.defaultProps = {
  tree: [],
  showOnMobile: false,
  onNavigate: () => {}
};

export default Menu;
