import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

/**
 * Footer
 */

const Footer = () => {
  return (
    <footer className="shard-docs-sidebar-footer">
      Built with <a href="https://fa-repo.github.io/shard-docs/#/docs">@fa-repo/shard-docs</a>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
