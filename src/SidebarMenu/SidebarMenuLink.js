import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * SidebarMenuLink
 */

const SidebarMenuLink = props => (
  <NavLink to={props.link} exact>
    {props.title}
  </NavLink>
);

SidebarMenuLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
};

SidebarMenuLink.defaultProps = {
  link: "",
  title: ""
};

export default SidebarMenuLink;
