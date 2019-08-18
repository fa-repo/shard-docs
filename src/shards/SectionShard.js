import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./SectionShard.scss";

const Link = props => (
  <a
    href={props.href}
    onClick={e => {
      e.preventDefault();
      props.onClick(e);
    }}
  >
    {props.text}
  </a>
);

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
    collapsed: true
  };

  componentDidMount() {
    if (this.props.persistState) {
      let collapsed = this.isCollapsed();
      this.setState({ collapsed });
    }
  }

  isCollapsed = () => {
    let collapsed = localStorage.getItem("fa-repo-section-shard-state-" + this.props.persistState);
    return collapsed === null ? true : collapsed == "true";
  };

  setCollapsed = collapsed => {
    if (this.props.persistState) {
      localStorage.setItem("fa-repo-section-shard-state-" + this.props.persistState, collapsed);
    }
    this.setState({ collapsed });
  };

  render() {
    const { title, persistState, ...props } = this.props;
    return (
      <div {...props} className={classnames("shard-docs-section-shard", props.className)}>
        <h2 className="shard-docs-section-shard-title">
          <Link href="#" onClick={e => this.setCollapsed(!this.isCollapsed())} text={title} />
        </h2>
        {this.isCollapsed() && <div className="shard-docs-section-shard">{props.children}</div>}
      </div>
    );
  }
}

export default SectionShard;
