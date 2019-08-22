import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

/**
 * SidebarMenuList
 */

const ExternalIcon = props => (
  <svg className="external-icon" width="24" height="24" viewBox="0 0 24 24">
    <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z" />
    <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z" />
  </svg>
);

const ExternalLinkNode = ({ title, link, ...props }) => (
  <li {...props}>
    <a href={link} target="_blank">
      {title} <ExternalIcon />
    </a>
  </li>
);

const TopLevelExternalLinkNode = ({ title, link, ...props }) => (
  <ul {...props}>
    <ExternalLinkNode title={title} link={link} />
  </ul>
);

const PageNode = ({ title, path, isActive, ...props }) => (
  <li {...props}>
    <NavLink className={classnames(isActive && "active")} to={path} exact>
      {title}
    </NavLink>
  </li>
);

const TopLevelPageNode = ({ title, path, isActive, ...props }) => (
  <ul {...props}>
    <PageNode title={title} path={path} isActive={isActive} />
  </ul>
);

const HeadingNode = ({ title, ...props }) => (
  <li {...props}>
    <h3>{title}</h3>
  </li>
);

const GroupNode = ({ title, pages, basePath, ...props }) => (
  <ul {...props}>
    {title && <HeadingNode title={title} />}
    <SidebarMenuList items={pages} basePath={basePath} />
  </ul>
);

const SidebarMenuList = ({ items, basePath }) => {
  return (
    <>
      {items.map((item, i) => {
        const { type, title, link, path, isActive, pages, depth } = item;
        if (type === "page") {
          return <PageNode key={i} title={title} path={path} isActive={isActive} />;
        } else if (type === "external") {
          return <ExternalLinkNode key={i} title={title} link={link} />;
        } else if (type === "group" || type === "discrete-group") {
          return <GroupNode key={i} title={title} pages={pages} basePath={basePath} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

SidebarMenuList.propTypes = {
  items: PropTypes.array
};
SidebarMenuList.defaultProps = {
  items: []
};

export default SidebarMenuList;
