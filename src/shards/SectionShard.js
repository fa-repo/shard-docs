import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./SectionShard.scss";

/**
 * SectionShard
 */

class SectionShard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    persistCollapsedState: PropTypes.string
  };

  static defaultProps = {
    title: "",
    persistCollapsedState: null
  };

  state = {
    isOpen: true
  };

  componentDidMount() {
    if (this.props.persistCollapsedState) {
      let isOpen = localStorage.getItem("section-shard-state-" + this.props.persistCollapsedState);
      this.setState({
        isOpen: isOpen === null ? true : isOpen == "true"
      });
    }
  }

  handleToggle = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    if (this.props.persistCollapsedState) {
      localStorage.setItem(
        "section-shard-state-" + this.props.persistCollapsedState,
        !this.state.isOpen
      );
    }
  };

  render() {
    const { title, persistCollapsedState, ...props } = this.props;

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
