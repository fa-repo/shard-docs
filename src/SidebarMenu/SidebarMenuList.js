import React from "react";
import PropTypes from "prop-types";
import SidebarMenuNode from "./SidebarMenuNode";
import SidebarMenuHeading from "./SidebarMenuHeading";

/**
 * SidebarMenuList
 */

const SidebarMenuList = ({ items, ...props }) => {
  return (
    <ul {...props}>
      {items.map((item, i) => {
        if (item.type === "heading") {
          return <SidebarMenuHeading key={i} heading={item.heading} />;
        } else if (item.type === "page") {
          return <SidebarMenuNode key={i} link={item.path} title={item.title} />;
        } else if (item.type === "collection") {
          return (
            <SidebarMenuNode key={i} link={item.path} title={item.title}>
              <SidebarMenuList items={item.children} />
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
