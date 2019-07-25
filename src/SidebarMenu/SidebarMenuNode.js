import React from "react";
import PropTypes from "prop-types";
import SidebarMenuLink from "./SidebarMenuLink";

/**
 * SidebarMenuNode
 */

const SidebarMenuNode = props => (
  <li>
    {props.link ? <SidebarMenuLink link={props.link} title={props.title} /> : props.title}
    {props.children}
  </li>
);

SidebarMenuNode.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
};

SidebarMenuNode.defaultProps = {
  link: "",
  title: ""
};

export default SidebarMenuNode;
