import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import BaseLink from "@fa-repo/base-react/dist/link";
import "./SectionShard.scss";

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
    let expanded = JSON.parse(localStorage.getItem(this.state.storageId));
    return expanded === null ? this.state.expanded : Boolean(expanded);
  };

  toggle = () => {
    const expanded = !this.isExpanded();
    if (this.props.persistState) localStorage.setItem(this.state.storageId, expanded);
    this.setState({ expanded });
  };

  render() {
    const { title, persistState, ...props } = this.props;
    return (
      <section {...props} className={classnames("shard-docs-section-shard", props.className)}>
        <h2 className="shard-docs-section-shard-title">
          <BaseLink href="#" onClick={() => this.toggle()} preventDefault text={title} />
        </h2>
        {this.isExpanded() && <div className="shard-docs-section-shard">{props.children}</div>}
      </section>
    );
  }
}

export default SectionShard;
