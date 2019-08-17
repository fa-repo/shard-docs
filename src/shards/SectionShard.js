import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./SectionShard.scss";

/**
 * SectionShard
 */

class SectionShard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: ""
  };

  state = {
    isOpen: true
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { title, ...props } = this.props;

    return (
      <div {...props} className={classnames("shard-docs-section-shard", props.className)}>
        <h2 className="shard-docs-section-shard-title">
          <a href="#" onClick={this.handleToggle}>
            {title}
          </a>
        </h2>
        {this.state.isOpen && <div className="shard-docs-section-shard">{props.children}</div>}
      </div>
    );
  }
}

export default SectionShard;
