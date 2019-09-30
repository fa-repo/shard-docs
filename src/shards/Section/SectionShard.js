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
    expanded: true,
    storageId: "fa-repo-section-shard-state-" + this.props.persistState
  };

  componentDidMount() {
    if (this.props.persistState) {
      this.setState({ expanded: this.isExpanded() });
    }
  }

  isExpanded = () => {
    let expanded = localStorage.getItem(this.state.storageId);
    return expanded === null ? this.state.expanded : expanded === "true";
  };

  toggle = expanded => {
    if (this.props.persistState) localStorage.setItem(this.state.storageId, expanded);
    this.setState({ expanded });
  };

  render() {
    const { title, persistState, ...props } = this.props;
    return (
      <div {...props} className={classnames("shard-docs-section-shard", props.className)}>
        <h2 className="shard-docs-section-shard-title">
          <Link href="#" onClick={e => this.toggle(!this.isExpanded())} text={title} />
        </h2>
        {this.isExpanded() && <div className="shard-docs-section-shard">{props.children}</div>}
      </div>
    );
  }
}

export default SectionShard;
