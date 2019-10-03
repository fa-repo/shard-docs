import React from "react";
import PropTypes from "prop-types";
import SidebarHeader from "../Header";
import SidebarDescription from "../Description";
import SidebarMenu from "../Menu";
import BuiltWithShardDocs from "../BuiltWithShardDocs";
import { appTypes, treeTypes } from "../types";
import "./Sidebar.scss";

/**
 * Sidebar
 */

class Sidebar extends React.Component {
  static propTypes = {
    app: appTypes,
    title: PropTypes.string,
    description: PropTypes.string,
    source: treeTypes,
    hideBuiltWithShardDocs: PropTypes.bool
  };

  static defaultProps = {
    app: {},
    title: "",
    description: "",
    source: [],
    hideBuiltWithShardDocs: false
  };

  state = {
    showMenuOnMobile: false
  };

  render() {
    const { app, source, hideBuiltWithShardDocs } = this.props;
    const showBuiltWithShardDocs = !hideBuiltWithShardDocs;

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
        {showBuiltWithShardDocs && <BuiltWithShardDocs />}
      </aside>
    );
  }
}

export default Sidebar;
