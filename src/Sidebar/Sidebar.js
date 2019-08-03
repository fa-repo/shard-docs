import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

/**
 * Sidebar
 */

const Sidebar = props => (
  <aside className="shard-docs-sidebar">
    <SidebarHeader title={props.title} description={props.description} basePath={props.basePath} />
    <SidebarMenu items={props.skeleton} basePath={props.basePath} />
  </aside>
);

Sidebar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  basePath: PropTypes.string,
  skeleton: PropTypes.array
};

Sidebar.defaultProps = {
  title: "",
  description: "",
  skeleton: []
};

export default Sidebar;
