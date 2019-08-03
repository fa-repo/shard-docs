import React from "react";
import PropTypes from "prop-types";
import SidebarMenuNode from "./SidebarMenuNode";
import SidebarMenuHeading from "./SidebarMenuHeading";

/**
 * SidebarMenuList
 */

const SidebarMenuList = ({ items, basePath, ...props }) => {
  return (
    <ul {...props}>
      {items.map((item, i) => {
        if (item.type === "heading") {
          return <SidebarMenuHeading key={i} heading={item.heading} />;
        } else if (item.type === "page") {
          return (
            <SidebarMenuNode
              key={i}
              page={item}
              link={item.path}
              title={item.title}
              basePath={basePath}
            />
          );
        } else if (item.type === "collection") {
          return (
            <SidebarMenuNode
              key={i}
              page={item}
              link={item.path}
              title={item.title}
              basePath={basePath}
            >
              <SidebarMenuList items={item.children} basePath={basePath} />
            </SidebarMenuNode>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

SidebarMenuList.propTypes = {
  items: PropTypes.array
};
SidebarMenuList.defaultProps = {
  items: []
};

export default SidebarMenuList;
