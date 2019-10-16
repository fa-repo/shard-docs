import React from "react";
import PropTypes from "prop-types";
import ArrowDown from "../icons/ArrowDown";
import ArrowRight from "../icons/ArrowRight";
import BaseLink from "@fa-repo/base-react/dist/link";
import "./MenuSectionHeader.scss";

/**
 * MenuSectionHeader
 */

class MenuSectionHeader extends React.Component {
  render() {
    const { onToggle, title, expanded } = this.props;

    return (
      <header className="shard-docs-menu-section-header">
        <BaseLink href="#" preventDefault onClick={this.props.onToggle}>
          <h3>{title}</h3>
          {expanded ? <ArrowDown /> : <ArrowRight />}
        </BaseLink>
      </header>
    );
  }
}

MenuSectionHeader.propTypes = {
  title: PropTypes.string,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func
};

MenuSectionHeader.defaultProps = {
  title: "",
  expanded: false,
  onNavigate: () => {}
};

export default MenuSectionHeader;
