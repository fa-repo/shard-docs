import React from "react";
import PropTypes from "prop-types";
import MenuList from "./MenuList";
import { appTypes, treeTypes } from "../types";
import "./Menu.scss";

/**
 * Menu
 */

const Menu = props => {
  return (
    <div className="shard-docs-sidebar-menu" data-show-on-mobile={props.showOnMobile}>
      <MenuList app={props.app} items={props.items} onNavigate={props.onNavigate} />
    </div>
  );
};

Menu.propTypes = {
  app: appTypes,
  items: treeTypes,
  showOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
Menu.defaultProps = {
  app: {},
  items: [],
  showOnMobile: false,
  onNavigate: () => {}
};

export default Menu;
