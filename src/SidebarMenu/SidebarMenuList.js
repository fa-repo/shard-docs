import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import ExternalIcon from "boxicons/svg/regular/bx-link-external.svg";

/**
 * SidebarMenuList
 */

const ExternalLinkNode = ({ title, link, ...props }) => (
  <li {...props}>
    <a href={link} target="_blank">
      {title} <ExternalIcon className="external-icon" />
    </a>
  </li>
);

const PageNode = ({ title, path, isActive, isEmpty, onNavigate, ...props }) => {
  return (
    <li {...props}>
      <NavLink
        className={classnames(isActive && "active")}
        to={path}
        replace={!isActive} // suppress "Warning: Hash history cannot PUSH the same path"
        onClick={e => {
          if (isEmpty) e.preventDefault();
          onNavigate();
        }}
        disabled={isEmpty}
        exact
      >
        {title}
      </NavLink>
    </li>
  );
};

const HeadingNode = ({ title, path, isActive, isEmpty, onNavigate, ...props }) => (
  <li {...props}>
    <h3>
      <NavLink
        className={classnames(isActive && "active")}
        to={path}
        replace={!isActive} // suppress "Warning: Hash history cannot PUSH the same path"
        onClick={e => {
          if (isEmpty) e.preventDefault();
          onNavigate();
        }}
        disabled={isEmpty}
        exact
      >
        {title}
      </NavLink>
    </h3>
  </li>
);

const GroupNode = ({ title, pages, path, isActive, isEmpty, basePath, onNavigate, ...props }) => (
  <ul {...props}>
    {title && (
      <HeadingNode
        title={title}
        path={path}
        isActive={isActive}
        isEmpty={isEmpty}
        onNavigate={onNavigate}
      />
    )}
    <SidebarMenuList items={pages} basePath={basePath} onNavigate={onNavigate} />
  </ul>
);

const SidebarMenuList = ({ items, basePath, onNavigate }) => {
  return (
    <>
      {items.map((item, i) => {
        const { type, title, link, path, isActive, pages, isEmpty } = item;
        if (type === "page") {
          return (
            <PageNode
              key={i}
              title={title}
              path={path}
              isActive={isActive}
              isEmpty={isEmpty}
              onNavigate={onNavigate}
            />
          );
        } else if (type === "external") {
          return <ExternalLinkNode key={i} title={title} link={link} />;
        } else if (type === "group" || type === "discrete-group") {
          return (
            <GroupNode
              key={i}
              path={item.path}
              title={title}
              pages={pages}
              basePath={basePath}
              isActive={isActive}
              isEmpty={isEmpty}
              onNavigate={onNavigate}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

SidebarMenuList.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string,
  onNavigate: PropTypes.func
};
SidebarMenuList.defaultProps = {
  items: [],
  basePath: "",
  onNavigate: () => {}
};

export default SidebarMenuList;
