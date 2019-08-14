import React from "react";
import PropTypes from "prop-types";
import SidebarMenuLink from "./SidebarMenuLink";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

/**
 * SidebarMenuNode
 */

const SidebarMenuNode = ({ page, basePath, ...props }) => {
  return (
    <li>
      {page.path ? (
        <SidebarMenuLink
          className={classnames(
            page.pageIndex === 0 && basePath === props.location.pathname && "active",
            "a"
          )}
          link={page.path}
          title={page.title}
        />
      ) : (
        page.title
      )}
      {props.children}
    </li>
  );
};

SidebarMenuNode.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
};

SidebarMenuNode.defaultProps = {
  link: "",
  title: ""
};

export default withRouter(SidebarMenuNode);
