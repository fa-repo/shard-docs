import React from "react";
import PropTypes from "prop-types";
import MenuTree from "../MenuTree";
import { appTypes, treeTypes } from "../types";
import "./Menu.scss";

/**
 * Menu
 */

const Menu = props => {
  return (
    <div className="shard-docs-menu" data-show-on-mobile={props.showOnMobile}>
      <MenuTree tree={props.tree} onNavigate={props.onNavigate} />
    </div>
  );
};

Menu.propTypes = {
  tree: treeTypes,
  showOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
Menu.defaultProps = {
  app: {},
  tree: [],
  showOnMobile: false,
  onNavigate: () => {}
};

export default Menu;
