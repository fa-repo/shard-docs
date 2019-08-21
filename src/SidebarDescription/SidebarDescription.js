import React from "react";
import PropTypes from "prop-types";
import "./SidebarDescription.scss";

/**
 * SidebarDescription
 */

const SidebarDescription = props => (
  <p className="shard-docs-sidebar-description">{props.description}</p>
);

SidebarDescription.propTypes = {};
SidebarDescription.defaultProps = {};

export default SidebarDescription;
