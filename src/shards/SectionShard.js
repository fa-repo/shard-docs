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
    persistState: PropTypes.string
  };

  static defaultProps = {
    title: "",
    persistState: null
  };

  state = {
    isOpen: true
  };

  componentDidMount() {
    if (this.props.persistState) {
      let isOpen = localStorage.getItem("section-shard-state-" + this.props.persistState);
      this.setState({
        isOpen: isOpen === null ? true : isOpen == "true"
      });
    }
  }

  handleToggle = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    if (this.props.persistState) {
      localStorage.setItem("section-shard-state-" + this.props.persistState, !this.state.isOpen);
    }
  };

  isCollapsed = () => {
    let collapsed = localStorage.getItem("section-shard-state-" + this.props.persistState);
    return collapsed === null ? true : collapsed == "true";
  };

  render() {
    const { title, persistState, ...props } = this.props;
    return (
      <div {...props} className={classnames("shard-docs-section-shard", props.className)}>
        <h2 className="shard-docs-section-shard-title">
          <a href="#" onClick={this.handleToggle}>
            {title}
          </a>
        </h2>
        {this.isCollapsed() && <div className="shard-docs-section-shard">{props.children}</div>}
      </div>
    );
  }
}

export default SectionShard;
