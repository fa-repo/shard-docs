import React from "react";
import PropTypes from "prop-types";

/**
 * SidebarMenuHeading
 */

const SidebarMenuHeading = props => (
  <li>
    <h3>{props.heading || props.children}</h3>
  </li>
);

SidebarMenuHeading.propTypes = {
  heading: PropTypes.string
};

SidebarMenuHeading.defaultProps = {
  heading: ""
};

export default SidebarMenuHeading;
