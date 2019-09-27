import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "./Header";
import SidebarDescription from "./Description";
import SidebarMenu from "./Menu";
import SidebarFooter from "./Footer";
import "./Sidebar.scss";

/**
 * Sidebar
 */

class Sidebar extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    basePath: PropTypes.string,
    tree: PropTypes.array,
    showSidebarFooter: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    description: "",
    tree: [],
    showSidebarFooter: true
  };

  state = {
    showMenuOnMobile: false
  };

  render() {
    const { title, description, basePath, tree, showSidebarFooter } = this.props;
    return (
      <aside className="shard-docs-sidebar">
        <SidebarHeader
          title={title}
          description={description}
          basePath={basePath}
          onToggleMenu={() => this.setState({ showMenuOnMobile: !this.state.showMenuOnMobile })}
        />
        {description && <SidebarDescription description={description} />}
        <SidebarMenu
          items={tree}
          basePath={basePath}
          showMenuOnMobile={this.state.showMenuOnMobile}
          onNavigate={() => this.setState({ showMenuOnMobile: false })}
        />
        {showSidebarFooter && <SidebarFooter />}
      </aside>
    );
  }
}

export default Sidebar;
