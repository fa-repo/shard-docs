import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "./Header";
import SidebarDescription from "../Description";
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
    activePath: PropTypes.string,
    source: PropTypes.array,
    showSidebarFooter: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    description: "",
    basePath: "",
    activePath: "",
    source: [],
    showSidebarFooter: true
  };

  state = {
    showMenuOnMobile: false
  };

  render() {
    const { title, description, basePath, activePath, source, showSidebarFooter } = this.props;
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
          items={source}
          basePath={basePath}
          activePath={activePath}
          showMenuOnMobile={this.state.showMenuOnMobile}
          onNavigate={() => this.setState({ showMenuOnMobile: false })}
        />
        {showSidebarFooter && <SidebarFooter />}
      </aside>
    );
  }
}

export default Sidebar;
