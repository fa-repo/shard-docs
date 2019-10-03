import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./MenuList";
import { appTypes, treeTypes } from "../types";
import "./Menu.scss";

/**
 * Menu
 */

const Menu = props => {
  return (
    <div className="shard-docs-sidebar-menu" data-show-menu-on-mobile={props.showMenuOnMobile}>
      <SidebarMenuList app={props.app} items={props.items} onNavigate={props.onNavigate} />
    </div>
  );
};

Menu.propTypes = {
  app: appTypes,
  items: treeTypes,
  showMenuOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
Menu.defaultProps = {
  app: {},
  items: [],
  showMenuOnMobile: false,
  onNavigate: () => {}
};

export default Menu;
