import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import ExternalIcon from "boxicons/svg/regular/bx-link-external.svg";

/**
 * MenuList
 */

const ExternalLinkNode = ({ title, link, ...props }) => (
  <li {...props}>
    <a href={link} target="_blank">
      {title} <ExternalIcon className="external-icon" />
    </a>
  </li>
);

const DocumentNode = ({ title, path, isActive, isEmpty, onNavigate, ...props }) => {
  return (
    <li {...props}>
      <NavLink
        className={classnames(isActive && "active")}
        to={path}
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

const GroupNode = ({
  title,
  children,
  path,
  isActive,
  isEmpty,
  basePath,
  activePath,
  onNavigate,
  ...props
}) => (
  <ul {...props}>
    {title && (
      <HeadingNode
        title={title}
        path={path}
        isActive={activePath === path}
        isEmpty={isEmpty}
        onNavigate={onNavigate}
      />
    )}
    <MenuList
      items={children}
      basePath={basePath}
      activePath={activePath}
      onNavigate={onNavigate}
    />
  </ul>
);

const MenuList = ({ items, basePath, activePath, onNavigate }) => {
  return (
    <>
      {items.map((item, i) => {
        const { type, title, link, path, isActive, children, isEmpty } = item;
        if (type === "document") {
          return (
            <DocumentNode
              key={i}
              title={title}
              path={path}
              isActive={activePath === path}
              isEmpty={isEmpty}
              onNavigate={onNavigate}
            />
          );
        } else if (type === "external") {
          return <ExternalLinkNode key={i} title={title} link={link} />;
        } else if (type === "folder") {
          return (
            <GroupNode
              key={i}
              path={item.path}
              title={title}
              children={children}
              basePath={basePath}
              activePath={activePath}
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

MenuList.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string,
  onNavigate: PropTypes.func
};
MenuList.defaultProps = {
  items: [],
  basePath: "",
  onNavigate: () => {}
};

export default MenuList;
