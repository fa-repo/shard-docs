import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

/**
 * SidebarFooter
 */

const SidebarFooter = ({ title, description, basePath, ...props }) => {
  return (
    <footer className="shard-docs-sidebar-footer">
      Built with <a href="https://fa-repo.github.io/shard-docs/#/docs">@fa-repo/shard-docs</a>
    </footer>
  );
};

SidebarFooter.propTypes = {};

SidebarFooter.defaultProps = {};

export default SidebarFooter;
