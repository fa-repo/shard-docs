import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "../SidebarHeader";
import SidebarDescription from "../SidebarDescription";
import SidebarMenu from "../SidebarMenu";
import SidebarFooter from "../SidebarFooter";
import "./Sidebar.scss";

/**
 * Sidebar
 */

const Sidebar = props => (
  <aside className="shard-docs-sidebar">
    <SidebarHeader title={props.title} description={props.description} basePath={props.basePath} />
    {props.description && <SidebarDescription description={props.description} />}
    <SidebarMenu items={props.tree} basePath={props.basePath} />
    {props.showSidebarFooter && <SidebarFooter />}
  </aside>
);

Sidebar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  basePath: PropTypes.string,
  tree: PropTypes.array,
  showSidebarFooter: PropTypes.bool
};

Sidebar.defaultProps = {
  title: "",
  description: "",
  tree: [],
  showSidebarFooter: true
};

export default Sidebar;
