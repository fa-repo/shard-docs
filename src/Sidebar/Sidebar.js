import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "../Header";
import SidebarDescription from "../Description";
import SidebarMenu from "../Menu";
import BuiltWithShardDocs from "../BuiltWithShardDocs";
import "./Sidebar.scss";

/**
 * Sidebar
 */

class Sidebar extends React.Component {
  static propTypes = {
    app: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      actionPath: PropTypes.string,
      basePath: PropTypes.string
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.array,
    showSidebarFooter: PropTypes.bool
  };

  static defaultProps = {
    app: {},
    title: "",
    description: "",
    source: [],
    showSidebarFooter: true
  };

  state = {
    showMenuOnMobile: false
  };

  render() {
    const { app, source, showSidebarFooter } = this.props;
    return (
      <aside className="shard-docs-sidebar">
        <SidebarHeader
          title={app.title}
          description={app.description}
          basePath={app.basePath}
          onToggleMenu={() => this.setState({ showMenuOnMobile: !this.state.showMenuOnMobile })}
        />
        {app.description && <SidebarDescription description={app.description} />}
        <SidebarMenu
          app={app}
          items={source}
          showMenuOnMobile={this.state.showMenuOnMobile}
          onNavigate={() => this.setState({ showMenuOnMobile: false })}
        />
        {showSidebarFooter && <BuiltWithShardDocs />}
      </aside>
    );
  }
}

export default Sidebar;
